import express from "express";
import { getQuestions , createQuestion ,updateQuestion ,deleteQuestion,likeQuestion} from "../controllers/questions.js";
const router =express.Router();
import {auth} from "../middleware/auth.js"


router.get("/",getQuestions);
router.post("/",auth,createQuestion);
router.patch("/:id",auth,updateQuestion);
router.patch("/:id/likeQuestion",auth,likeQuestion);
router.delete("/:id",auth,deleteQuestion);


export default router;