const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Items collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react-closet-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const closetSeed = [
  {
    clothingType: "Shirt",
    brand: "Anthropologie",
    colors: [
      "blue",
      "multicolor"
    ],
    pattern: true,
    seasons: {
      spring: true,
      summer: true
    },
    source: "https://s7d5.scene7.com/is/image/Anthropologie/4110646810022_045_b4?$a15-pdp-detail-shot$=&fit=constrain&fmt=webp&qlt=80&wid=720",
    date: new Date(Date.now())
  },
  {
    clothingType: "Dress",
    brand: "Anthropologie",
    pattern: true,
    seasons: {
      spring: true,
      summer: true
    },
    source: "https://s7d5.scene7.com/is/image/Anthropologie/4130647160058_015_b14?$a15-pdp-detail-shot$=&fit=constrain&fmt=webp&qlt=80&wid=720",
    date: new Date(Date.now())
  },
  {
    clothingType: "Skirt",
    brand: "Anthropologie",
    colors: [
      "pink"
    ],
    pattern: true,
    seasons: {
      spring: true,
      summer: true
    },
    source: "https://s7d5.scene7.com/is/image/Anthropologie/4120638280087_266_b14?$a15-pdp-detail-shot$=&fit=constrain&fmt=webp&qlt=80&wid=720",
    date: new Date(Date.now())
  },
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(closetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
