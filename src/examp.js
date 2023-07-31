const express = require("express");

const app = express();

app.post("/", (request, response) => {
  const { value } = request.body;
  let buttonEle = document.createElement("button");
  buttonEle.textContent = "Click";
  buttonEle.onclick = function () {
    response.send(value);
  };
});

app.listen(3000, () => {
  console.log("Server Started");
});
