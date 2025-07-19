import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/test", (req: Request, res: Response) => {
  res.send("Welcome to the Stories App API");
});

app.listen(3000, () => {
  console.log("Server up and running on port 3000");
});
