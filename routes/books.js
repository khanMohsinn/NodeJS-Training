const express = require("express");
const router = express.Router();
const authMiddleware = require("../utility/authMiddleware");
const logic = require("../controller/logic");

router.get("/", authMiddleware, logic.getBooks);
router.get("/:id", authMiddleware, logic.getBookbyID);
router.post("/", authMiddleware, logic.saveBook);
router.put("/:id", authMiddleware, logic.updateBook);
router.delete("/:id", authMiddleware, logic.deleteBook);

module.exports = router;
