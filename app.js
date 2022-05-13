const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

const stringCutter = (string_to_cut) => {
  let finalArray = [];
  // // cutting the string up into chunks of 3 and putting them in an array
  for (let i = 2; i < string_to_cut.length; i += 3) {
    finalArray.push(string_to_cut[i]);
  }
  return finalArray.join("");
};

app.post("/test", (req, res) => {
  res.send({ return_string: stringCutter(req.body["string_to_cut"]) });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
