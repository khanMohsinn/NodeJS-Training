const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;
const path = require("path");

const logFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
	level: "info",
	// format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
	// defaultMeta: { service: "user-service" },
	transports: [
		//
		// - Write all logs with importance level of `error` or less to `error.log`
		// - Write all logs with importance level of `info` or less to `combined.log`
		//
		new transports.File({
			filename: path.join("utility/", "logs", "development.log"),
			format: combine(
				timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
				logFormat
			),
		}),
		new transports.File({
			filename: path.join("utility/", "logs", "production.log"),
			level: "info",
			format: format.json(),
		}),
	],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
// if (process.env.NODE_ENV !== "production") {
// 	logger.add(
// 		new winston.transports.Console({
// 			format: winston.format.simple(),
// 		})
// 	);
// }

module.exports = logger;
