import {WebSocketServer} from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws, request) => {
  console.log("New WebSocket connection established");
  const url=request.url;
  if(!url){
    return;
  }
  const queryParams=new URLSearchParams(url.split('?')[1]);
  const token=queryParams.get('token') || "";
  const decoded=jwt.verify(token,JWT_SECRET);

  if(!decoded || !(decoded as JwtPayload).userId ){
    ws.close();
    return;
  }
  

  
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Echo: ${message}`);
  });
  
  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });
});

wss.on("listening", () => {
  console.log("WebSocket server is running on ws://localhost:8080");
});

wss.on("error", (error) => {
  console.error("WebSocket server error:", error);
});