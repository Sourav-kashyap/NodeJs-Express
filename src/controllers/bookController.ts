import express, { Application, Request, Response, NextFunction } from "express";

export const getAllBooks = (req:Request, res:Response) =>{
res.send("get all");
}

export const addBooks = (req:Request, res:Response) =>{
res.send("add");
}

export const deleteBooks = (req:Request, res:Response) =>{
res.send("delete");
}

export const updateBooks = (req:Request, res:Response) =>{
res.send("update");
}