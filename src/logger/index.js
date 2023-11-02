const log = require("debug")("logger");

module.exports = {
  logger: (req, res, next) => {
    log(
      `${req.method} - ${new Date().toLocaleDateString()} - ${JSON.stringify(
        req.query
      )}`
    );
    next();
  },
};
