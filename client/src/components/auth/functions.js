import nodemailer from "nodemailer";
import { gmailPassword ,gmail ,KICKBOX_API_KEY} from "./data";
import axios from "axios";

export const sendOTP=async(otp,mailId)=>{
// const sendOTP=async(otp,mailId)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmail,
          pass: gmailPassword,
        }
      });
      
      var mailOptions = {
        from: 'chaudharysuraj2252@gmail.com',
        to: mailId,
        subject: 'account verification.',
        text: `${otp}`
      };
      try {
          const response=await transporter.sendMail(mailOptions);
          console.log(response);
      } catch (error) {
         console.log("error in sending OTP",error);
      }
}


export const validGmailId=async(gmailId)=>{
    try {      
        const response=await axios.get(`https://api.kickbox.com/v2/verify?email=${gmailId}&apikey=${KICKBOX_API_KEY}`);
        console.log("response : ",response);
        // return response;
        if(response.reason==="rejected_email") return false;
        if(response.reason==="accepted_email") return true;
    } catch (error) {
        console.log("error : ",error);
    }
    // https://api.kickbox.com/v2/verify?email=bill.lumbergh@gamil.com&apikey={{YOUR_API_KEY}}
}
// sendOTP(1212,"suraj_12017021@nitkkr.ac.in");