import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common";
import { middleware } from "./middleware";
import {CreateUserSchema,SigninSchema,CreateRoomSchema} from "@repo/common/types";
const app = express();
const PORT = 3001;

app.post("/signin", (req, res) => {
    const data=SigninSchema.safeParse(req.body);
     if(!data.success){
          res.json({
               message:"Incorrect data",
          })
          return;
     }
    const userId=1;
    const token=jwt.sign({userId},JWT_SECRET);

    res.json({token});
});

app.post("/signup", (req, res) => {
     const data=CreateUserSchema.safeParse(req.body);
     if(!data.success){
          res.json({
               message:"Incorrect data",
          })
          return;
     }
     res.json({userId:"123"})
});

app.post("/room",middleware,(req, res) => {
     const data=CreateRoomSchema.safeParse(req.body);
     if(!data.success){
          res.json({
               message:"Incorrect data",
          })
          return;
     }
     res.json({
        roomId: "room-123",
     })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});