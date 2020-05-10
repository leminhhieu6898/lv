require('./res/database/database');
const express = require("express");
const bodyParser = require('body-parser');
const doAmController = require('./res/controllers/DoAmController');
const taiKhoanController = require('./res/controllers/TaiKhoanController');


var app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.route('/api/doam')
    .get(doAmController.danhSach)
    .put(doAmController.them)
    .post(doAmController.capNhat)
    .delete(doAmController.xoa)

app.route('/api/taikhoan')
    .get(taiKhoanController.danhSach)
    .put(taiKhoanController.them)
    .post(taiKhoanController.capNhat)
    .delete(taiKhoanController.xoa)
app.route('/api/taikhoan/dangnhap').post(taiKhoanController.dangNhap);
app.route('/api/taikhoan/doimatkhau').post(taiKhoanController.doiMatKhau);
    

app.listen(3000);