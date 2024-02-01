import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();

//get AllBooks from the dB
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).send("error", err);
  }
});

//get a book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const book = await Book.findById({ _id: id });
    return res.status(200).json({
      book,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).send("error", err);
  }
});

//create a book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title && !req.body.author && !req.body.publishedYear) {
      return res.status(400).send("please send title,author,publishedYear");
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    };

    const book = await Book.create(newBook);
    return res.send(book);
  } catch (err) {
    console.log(err.message);
    res.status(400).send("error", err);
  }
});

//update a book

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res
        .status(400)
        .send("Please send title, author, and publishedYear");
    }

    const result = await Book.findByIdAndUpdate(id, req.body, { new: true });

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res
      .status(200)
      .json({ message: "Book updated successfully", book: result });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj1 = await Book.findByIdAndDelete(id);
    if (!obj1) {
      return res.status(404).send("not deleted");
    }
    return res.status(201).send("deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
