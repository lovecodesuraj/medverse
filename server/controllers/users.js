import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv"
dotenv.config();


 export const signin=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const existingUser=await User.findOne({email});
        if(!existingUser) return res.status(404).json({message:"user not found."});
        const isPasswordCorrect=await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid Credentials."});
        const token=jwt.sign({email:existingUser.email,id:existingUser._id},process.env.SECRET,{expiresIn:"1h"});
        res.status(200).json({result:existingUser,token});
    } catch (error) {
        res.status(500).json({message:"Something went wrong."});
    }

}
 export const signup=async(req,res)=>{
    const {email,picture,password,confirmPassword,firstName,lastName}=req.body;
    try {
        const existingUser=await User.findOne({email});
        // console.log(existingUser);
        if(existingUser) return res.status(400).json({message:"user alreday exists."});
        if(password!=confirmPassword) return res.status(400).jaon({message:"password do not match."});
        const hashedPassword= await bcrypt.hash(password,12);
        // console.log(hashedPassword);
        const result = await User.create({email,name:`${firstName} ${lastName}`,picture,createdAt:new Date().toISOString(),password:hashedPassword});
        const token =jwt.sign({email:result.email,id:result._id},process.env.SECRET,{expiresIn:"1h"});
        res.status(200).json({result:result,token});

    } catch (error) {
      res.status(400).json({mesage:"something went wrong"});        
    }
   
}
export const addUser=async(req,res)=>{
    const {email,picture,name,sub}=req.body;
    try {
        const existingUser=await User.findOne({email});
        if(existingUser) return res.status(400).json({message:"user already exists."});
        const result = await User.create({password:"ilovecosmos",email,name,picture,createdAt:new Date().toISOString()});
        res.status(200).json(result);

    } catch (error) {
      res.status(400).json({mesage:"something went wrong"});        
    }
   
}

export const getUsers=async (req,res)=>{
    try {
        const users=await User.find().limit(20);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message:error?.message});
    }
}

