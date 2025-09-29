import express, { Request, Response } from "express";
import 'dotenv/config';

import client from "./db/config";

import usersRoutes from './api/routes/users';

const app = express();
const port = process.env.PORT || 3000;

app.get("/hello", (_req: Request, res: Response) => {
    res.status(200).send({
        status: 200,
        message: "Hello World!"
    });
});

app.use("/users", usersRoutes);

app.listen(port, () => {
    client;
    console.log(`App is online at: http://localhost:${port}`);
});