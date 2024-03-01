const mongoose = require("mongoose");

const cricketSchema = new mongoose.Schema({
  ranking: {
    type: Number,
  },
  name: { type: String, required: true },
  runs: { type: Number, required: true },
  ball: { type: Number, required: true },
  fours: { type: Number, required: true },
  sixes: { type: Number, required: true },
  sr: { type: Number, required: true },
  team: { type: String, required: true },
  opposition: { type: String, required: true },
  matchDate: { type: String, required: true },
});

const MensRanking = new mongoose.model("mensranking", cricketSchema);

module.exports = MensRanking;
