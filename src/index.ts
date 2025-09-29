import express, { Request, Response } from "express";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.get("/hello", (_req: Request, res: Response) => {
    res.status(200).send({
        status: 200,
        message: "Hello World!"
    });
});

app.listen(port, () => {
    console.log(`App is online at: http://localhost:${port}`);
})