const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const appServer = express();

// let's see what 'common' format looks like
appServer.use(morgan("common"));
appServer.use(cors());

const playstore = require("./playstore-data.js");
appServer.get("/playstore", (req, res) => {
  const { search = "", sort } = req.query;

  //App and Rating have to have the same casings as "App" and "Rating" in playstore to work.
  // ????? How to make remove the need for casings
  //includes(sort.toLowerCase()) -- won't recognize "App" in playstore because of casing...In future can just use <select> element to remove user choice, but would be nice to find solution like how it is done for search item
  if (sort) {
    if (!["App", "Rating"].includes(sort)) {
      return res.status(400).send("You can sort by either app or rating");
    }
  }

  let results = playstore.filter(item =>
    item.App.toLowerCase().includes(search.toLowerCase())
  );

  //How does this work?
  if (sort) {
    results.sort((a, b) => {
      return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
    });
  }

  res.json(results);
});

appServer.listen(8000, () => {
  console.log("Server started on PORT 8000");
});
