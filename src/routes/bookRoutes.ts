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
router.patch("/update-book/:id", updateBook);
router.delete("/delete-book/:id", deleteBook);

export default router;
