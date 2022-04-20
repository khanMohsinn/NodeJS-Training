const { createLogger, format } = require("winston");
const { combine, timestamp, colorize, printf } = format;
const winston = require("winston");
const path = require("path");
require("winston-daily-rotate-file");

const logFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
	level: "info",
	format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
	transports: [
		new winston.transports.Console(),
		// new transports.DailyRotateFile({
		// 	datePattern: "YYYY-MM-DD",
		// 	maxFiles: "30d",
		// 	zippedArchive: true,
		// 	filename: path.join("utility/", "logs", "application-%DATE%.log"),
		// }),
	],
});

module.exports = logger;
