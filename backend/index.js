import express from "express";
import { PORT, URI } from "./config.js";
import mongoose from "mongoose";
import BookRoutes from "./routes/bookRoute.js";
import cors from "cors";

const app = express();
mongoose
  .connect(URI)
  .then(() => {
    console.log("database connected");
    app.listen(PORT, () => {
      console.log("server is running on port 3030");
    });
  })
  .catch((err) => {
    console.log("database Error...");
  });

app.get("/", (req, res) => {
  console.log(req);
  return res.status(201).send("Home Route");
});

app.use(cors());
app.use(express.json());
app.use("/books", BookRoutes);
