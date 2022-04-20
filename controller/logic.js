const mongoose = require("mongoose");
const express = require("express");
const Book = require("../models/book");
const message = require("../utility/status");
const logger = require("../utility/logger");

const getBooks = async (req, res) => {
	try {
		const books = await Book.find();
		res.status(message.SUCCESS).send(books);
	} catch (error) {
		logger.error(error);
		res.status(message.BAD_REQUEST).send("No data available");
	}
};

const getBookbyID = async (req, res) => {
	if (req.params.id) {
		try {
			const id = req.params.id;
			const book = await Book.findById({ _id: id });
			res.status(message.SUCCESS).send(book);
		} catch (error) {
			res.status(message.BAD_REQUEST).send("No book has the given id");
		}
	} else {
		res.status(message.BAD_REQUEST).send("No data available");
	}
};

const saveBook = async (req, res) => {
	const { name, description, author, price } = req.body;
	const bookName = await Book.findOne({ name });
	if (name && description && author && price) {
		if (!bookName) {
			try {
				const book = await new Book({
					name: name,
					description: description,
					author: author,
					price: price,
				});
				book.save();
				res.send("Book has been added");
			} catch (error) {
				res.status(message.BAD_REQUEST);
			}
		} else {
			res.status(message.DUPLICATE).send("Book already exists");
		}
	} else {
		res.status(message.BAD_REQUEST).send("Please enter all the details");
	}
};

const updateBook = async (req, res) => {
	const { name, description, author, price } = req.body;
	const id = req.params.id;
	try {
		const updatedBook = {
			name,
			description,
			author,
			price,
		};
		await Book.findOneAndUpdate({ _id: id }, updatedBook);
		res.send("Book has been updated");
	} catch (error) {
		res.status(message.BAD_REQUEST).send("Book data does not exist");
	}
};

const deleteBook = async (req, res) => {
	const id = req.params.id;
	try {
		await Book.findByIdAndDelete({ _id: id });
		res.status(message.SUCCESS).send("Book deleted successfully");
	} catch (error) {
		res.status(message.BAD_REQUEST).send("Book not found");
	}
};

module.exports = {
	getBooks,
	saveBook,
	updateBook,
	deleteBook,
	getBookbyID,
};
