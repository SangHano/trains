const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("You have reached the auth router");
});

//REGISTERS A USER
router.post("/register", async (req, res) => {
  try {
    const user = req.body;

    user.password = await bcrypt.hash(user.password, 10);

    const result = await prisma.user.create({
      data: user,
    });

    if (result) {
      const token = jwt.sign({ id: result.id }, process.env.JWT);

      res.status(201).send({ token });
    } else {
      res.send({ message: "Could not add User" });
    }
  } catch (error) {
    res.send(error.message);
  }
});

//Checks if user is valid
router.post("/signIn", async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username: username },
  });

  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password); //<===Will return true if password is correct
    if (passwordMatch) {
      const token = jwt.sign({ id: user.id }, process.env.JWT);

      res.send({ token });
    } else {
      res.send({ message: "Invalid Login" });
    }
  } else {
    res.send({ message: "Invalid Login" });
  }
});

//Route that sends the user based on the given token
router.get("/me", async (req, res) => {
  //Checks the request for the userId which 
  //was set by our middleware in server/index.js
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
    });

    if (user) {
      res.send(user);
    } else {
      res.send({ message: "User Not Found" });
    }
  } catch (error) {
    res.send({message: error.message});
  }
});

module.exports = router;
