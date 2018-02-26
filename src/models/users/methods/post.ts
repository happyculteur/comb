import { Request, Response } from "express";
import { dynamoDb } from "../../../config/dynamoDb";
import { IUser } from "../types";

export const post: (req: Request, res: Response) => void = (req, res) => {
  const user: IUser = req.body;

  const params = {
    Item: {
      ...user
    },
    TableName: process.env.DYNAMODB_TABLE_USER_NAME as string,
    TableRegion: process.env.DYNAMODB_TABLE_USER_REGION as string
  };

  return dynamoDb.put(params, error => {
    if (error) {
      res.status(400).json({ error: "Could not create user" });
    }
    // res.json({ user.properties });
  });
};
