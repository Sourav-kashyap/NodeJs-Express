import express, { Application, Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import Joi from "joi";
import { Book } from "../models/book.interface";

const db_path = path.join(__dirname, "../data/book.json");

// Define the Joi schema to match the Book interface
const bookSchema = Joi.object({
  title: Joi.string().strict().required(),
  author: Joi.string().strict().required(),
  isbn: Joi.number().strict().required(),
  publishDate: Joi.string().strict().required(),
  category: Joi.string().strict().required(),
  price: Joi.number().strict().required(),
});

export const getBooks = async (): Promise<Book[]> => {
  try {
    const data = await fs.promises.readFile(db_path, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading database file:", err);
    throw new Error("Something went wrong while reading the database.");
  }
};

export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getBooks();
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred while reading the database." });
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    // Validate the incoming request body with Joi schema
    const { error } = bookSchema.validate(req.body);

    // If validation fails, return a 400 Bad Request with the error message
    if (error) {
      res.status(400).send({ message: error.details[0].message });
      return;
    }

    const { title, author, isbn, publishDate, category, price } = req.body;

    if (!title || !author || !isbn || !publishDate || !category || !price) {
      res.status(400).send({ message: "All fields are required" });
    }

    const data = await getBooks();

    data.push({ title, author, isbn, publishDate, category, price });

    await fs.promises.writeFile(
      db_path,
      JSON.stringify(data, null, 2),
      "utf-8"
    );

    res.status(201).send({ message: "Book added successfully", data });
  } catch (error) {
    console.error("Error adding book:", error);
    res
      .status(500)
      .send({ message: "An error occurred while adding the book." });
  }
};

export const deleteBook = (req: Request, res: Response) => {
  res.send("delete");
};

export const updateBook = (req: Request, res: Response) => {
  res.send("update");
};
