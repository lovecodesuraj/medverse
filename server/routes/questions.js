import express from "express";
import { getQuestions ,getQuestion,getQuestionsBySearch, createQuestion ,updateQuestion ,deleteQuestion,likeQuestion} from "../controllers/questions.js";
const router =express.Router();
import {auth} from "../middleware/auth.js"


router.get("/",getQuestions);
router.get("/search",getQuestionsBySearch);
router.post("/",auth,createQuestion);
router.patch("/:id",auth,updateQuestion);
router.patch("/:id/likeQuestion",auth,likeQuestion);
router.delete("/:id",auth,deleteQuestion);
router.get("/:id",getQuestion)

export default router;