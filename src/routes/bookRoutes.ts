import { Router } from "express";
import { getAllBooks, addBooks, updateBooks, deleteBooks } from "../controllers/bookController";

const router = Router();

router.get("/all-books" , getAllBooks);
router.post("/add-book/:id" , addBooks);
router.patch("/update-book/:id" , updateBooks);
router.delete("/delete-book/:id" , deleteBooks);

export default router;