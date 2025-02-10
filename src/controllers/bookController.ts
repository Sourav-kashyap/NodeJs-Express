import express, { Application, Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

const db_path = path.join(__dirname, "../data/book.json");

export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await fs.promises.readFile(db_path, "utf-8");
        const jsonData = JSON.parse(data); 
        res.send(jsonData);
    } catch (error) {
        res.status(500).send({ message: "An error occurred while reading the database." });
    }
};


export const addBooks = (req:Request, res:Response) =>{
res.send("add");
}

export const deleteBooks = (req:Request, res:Response) =>{
res.send("delete");
}

export const updateBooks = (req:Request, res:Response) =>{
res.send("update");
}