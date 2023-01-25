const express = require("express");
const app = express();
const port = 5000;
const axios = require("axios");

app.get("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const user_name = req.query.user_name;
  const response = await axios({
    method: "get",
    url: `https://www.instagram.com/${user_name}/channel/?__a=1&__d=dis&count=4`,
  });

  res.send(response.data);
});

app.listen(port, () => console.log("now listening on port 5000"));
