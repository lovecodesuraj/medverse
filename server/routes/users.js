import express from "express"
const router=express.Router();
import {signin,signup,getUsers,getUsersBySearch,getUser,addUser} from "../controllers/users.js";
router.post("/signin",signin);
router.post("/signup",signup);

router.get("/",getUsers)
router.post("/addUser",addUser)
router.get("/search",getUsersBySearch)
router.get("/:id",getUser)


export default router;