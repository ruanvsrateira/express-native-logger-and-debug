const { UserController } = require("./controllers/userController");
const { logger } = require("./logger");

const log = require("debug")("api:server");
const app = require("express")();

app.use(logger);

app.get("/", (req, res) => {
  return res.send("Calling route /");
});

app.get("/user", UserController.findAll);

app.listen(3000, () => log(`Server running at: ${3000}`));
