const express = require("express"); // goi thu vien express
const app = express(); // khoi tao function, call express
const port = 3000; //

app.get("/trang-chu", (req, res) => res.send("Hello Word!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// 127.0.0.1  --- localhost::3000
