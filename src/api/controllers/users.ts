import { Request, Response } from "express";
import client from "@/db/config";

export const createUser = (_req: Request, res: Response) => {
    console.log('createUser - Working');

    res.status(200).send({ 
        status: 200, 
        message: 'Created a user sucessfully!' 
    });
}

export const getUsers = async (_req: Request, res: Response) => {
    const query = "SELECT * FROM view_all_users;"
    const result = await client.query(query);
    const data = result.rows;

    if(!data){
        res.status(404).send({
            status: 404,
            message: "Users not found..."
        });
        return;
    }
    
    res.status(200).send({
        status: 200,
        message: "Users Found!",
        data
    });
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const query = `SELECT * FROM get_user($1)`;
    const values = [id];
    const result = await client.query(query, values);
    const data = result.rows[0];
    
    if(!data){
        res.status(404).send({
            status: 404,
            message: "Users not found..."
        });
        return;
    }

    res.status(200).send({
        status: 200,
        message: "User Found!",
        data
    });
}