const router = require("express").Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Returns all the stations
router.get("/", async (req, res) => {
  try {
    const results = await prisma.station.findMany();
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

//Returns a station with specified id
router.get("/:id", async (req, res) => {
  try {
    const result = await prisma.station.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (result) res.send(result);
    else res.send({ message: "Station not Found" });
  } catch (error) {
    res.send(error.message);
  }
});

//Creates a new station
router.post("/", async (req, res) => {
  try {
    const result = await prisma.station.create({
      data: req.body,
    });

    if (result) {
      res.send(result);
    } else {
      res.send({ message: "Could not add station to database" });
    }
  } catch (error) {
    res.send(error.message);
  }
});

//Updates the station with specified id
router.put("/:id", async (req, res) => {
  try {
    const result = await prisma.station.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });

    if (result) {
      res.send(result);
    } else {
      res.send({ message: "Could not update station" });
    }
  } catch (error) {
    res.send(error.message);
  }
});

//Deletes a station
router.delete("/:id", async (req, res) => {
  try {
    const result = await prisma.station.delete({
      where: { id: Number(req.params.id) },
    });
    if (result) res.send(result);
    else res.send({ message: "Station not Found" });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
