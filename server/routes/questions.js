import express from "express";
import { getQuestions , createQuestion ,updateQuestion} from "../controllers/questions.js";
const router =express.Router();

router.get("/",getQuestions);
router.post("/",createQuestion);
router.patch("/:id",updateQuestion);

export default router;