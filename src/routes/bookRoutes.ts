import { Router } from "express";
import {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController";

const router = Router();

router.get("/all-books", getAllBooks);
router.post("/add-book", addBook);
router.patch("/update-book/:index", updateBook);
router.delete("/delete-book/:index", deleteBook);

export default router;
