import express from "express"
const router=express.Router();
import {signin,signup,getUsers,addUser} from "../controllers/users.js";
router.post("/signin",signin);
router.post("/signup",signup);

router.get("/",getUsers)
router.post("/addUser",addUser)

export default router;