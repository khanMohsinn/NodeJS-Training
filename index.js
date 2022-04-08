import express from "express";

const app = express();

app.use(express.json());
/* We parse the body of the request to 
JSON before handling the request. This is knows as MIDDLEWARE */

const PORT = 8080;
app.listen(PORT, () => console.log(`it's alive on localhost:${PORT}`));

app.get("/shoes", (req, res) => {
  res.status(200).send({
    shoes: "👟",
    size: "UK-9",
  });
});

app.post("/shoes/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({
      message: "We need a logo",
    });
  }

  res.send({
    shoes: `👟 with your ${logo} and id of ${id}`,
  });
});
