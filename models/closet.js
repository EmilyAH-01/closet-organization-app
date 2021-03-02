const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const closetSchema = new Schema({
  clothingType: { type: String, required: true },
  brand: { type: String },
  colors: [{ type: String, default: "multicolor" }],
  pattern: { type: Boolean, default: false },
  seasons: {
    spring: { type: Boolean, default: false },
    summer: { type: Boolean, default: false },
    fall: { type: Boolean, default: false },
    winter: { type: Boolean, default: false },
  },
  organization: {
    sell: { type: Boolean, default: false },
    donate: { type: Boolean, default: false },
    recycle: { type: Boolean, default: false }
  },
  sustainable: { type: Boolean, default: false },
  ethical: { type: Boolean, default: false },
  source: { type: String },
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", closetSchema);

module.exports = Item;
