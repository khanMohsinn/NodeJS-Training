var express = require("express");
var router = express.Router();

let cricketTeam = [
  {
    jerseyNum: 7,
    playerName: "MS Dhoni",
    playerRole: "Right-hand wicketkeeper Batsman",
  },
  {
    jerseyNum: 18,
    playerName: "Virat Kohli",
    playerRole: "Right-hand Batsman",
  },
  {
    jerseyNum: 34,
    playerName: "Zaheer Khan",
    playerRole: "Left-arm fast Bowler",
  },
];

/* GET users listing. */
router.get("/", (req, res) => {
  res.send(cricketTeam);
});

router.post("/", (req, res) => {
  cricketTeam.push(req.body);
  res.send("Player added");
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  cricketTeam.map((e) => {
    if (e.jerseyNum == id) {
      e.playerName = req.body.playerName;
      e.playerRole = req.body.playerRole;
    }
  });
  res.send(`Data of player with id ${id} updated`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  cricketTeam.map((e) => {
    if (e.jerseyNum == id) {
      cricketTeam.pop(e);
    }
  });
  res.send(`Data of player with id ${id} deleted`);
});

module.exports = router;
