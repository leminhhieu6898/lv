const TaiKhoanModel = require('../models/TaiKhoanModel');
const Tools = require('../models/ToolsModel');
var TaiKhoan = {
    danhSach: function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        var body = req.query;
        TaiKhoanModel.find({ tendn: body.tendn }, (err, data) => {
            if(err) {
                return res.status(500).send({ status: 500, error: err.message });
            }
            return res.status(200).send(data);
        });
    },
    them: function (req, res) {
        var body = req.query;
        var taikhoan = new TaiKhoanModel();
        
        if(!Tools.isEmpty(body.tendn))
        {
            taikhoan.tendn = body.tendn;
        }
        if(!Tools.isEmpty(body.matkhau))
        {
            taikhoan.matkhau = body.matkhau;
        }

        taikhoan.save((err, data) => {
            if (err) {
                return res.status(500).send({ status: 500, message: err.errmsg });
            }
            return res.status(200).send({ status: 200, message: 1 });
        });
    },
    capNhat: function (req, res) {
        var body = req.query;
        TaiKhoanModel.findById(body._id, function (err, rs) {
            if (err) {
                return res.status(500).send({ status: 500, error: err.message });
            }
            if (rs) {
                if(!Tools.isEmpty(body.tendn))
                {
                    taikhoan.tendn = body.tendn;
                }
                if(!Tools.isEmpty(body.matkhau))
                {
                    taikhoan.matkhau = body.matkhau;
                }
                if(!Tools.isEmpty(body.quyen))
                {
                    taikhoan.quyen = body.quyen;
                }
                rs.save(function (err, rs) {
                    if (err) {
                        return res.status(500).send({ status: 500, message: err.errmsg });
                    }
                    return res.status(200).send({ status: 200, message: 1 });
                });
            }
        });
    },
    xoa: function (req, res) {
        var body = req.query;
        TaiKhoanModel.findByIdAndRemove( body._id, (err, tk) => {
            if (err) {
                return res.status(500).send({ status: 500, message: err.errmsg });
            }
            return res.status(200).send({ status: 200, message: 1 });
        });
    },
    doiMatKhau: function (req, res) {
        var body = req.query;
        TaiKhoanModel.findById(body._id, function (err, rs) {
            if (err) {
                return res.status(500).send({ status: 500, error: err.message });
            }
            if (rs) {
                if(!Tools.isEmpty(body.matkhau))
                {
                    taikhoan.matkhau = body.matkhau;
                }
                rs.save(function (err, rs) {
                    if (err) {
                        return res.status(500).send({ status: 500, message: err.errmsg });
                    }
                    return res.status(200).send({ status: 200, message: 1 });
                });
            }
        });
    },
    dangNhap: function(req, res) {
        var body = req.query;
        TaiKhoanModel.findOne({ tendn: body.tendn }, (err, data) => {
            if(err) {
                return res.status(500).send({ status: 500, error: err.message });
            }
            return res.status(200).send(data);
        });
    },
}
module.exports = TaiKhoan;