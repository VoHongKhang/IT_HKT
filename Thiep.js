
//require express
const express = require('express');
const path = require("path");
//khởi tạo express
const app = express();

app.use('/Thiep2',express.static(path.join(__dirname,"./Thiep2")))

app.use('/home2',express.static(path.join(__dirname,"./Thiep")))
//http://localhost:7000/home2/Thiep.html
//-------------------------
app.listen(7000);// cho 1 cổng để liên lạc

//Set-Execution Policy RemoteSigned -Scope CurrentUser

// chạy file này
//npm intit-> enter
//package.json    __>"name": "express",->"name": "express1", tên dự án trùng tên thư viện thì sửa lại
//npm i mongoose
//npm i express
//npm install -g nodemon//tự chạy code, sau chi chạy thực khi bằng cách: nodemon [your node app]
    