import express, {Application , Request , Response , NextFunction} from "express";
import dotenv from 'dotenv';

dotenv.config();

const app : Application = express();
const PORT : number = Number(process.env.PORT) || 5000;

app.use(express.json());

app.get("/" , (req:Request , res:Response) =>{
    res.send("Hello from home page:");
})

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
})

