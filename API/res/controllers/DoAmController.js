const DoAmModel = require('../models/DoAmModel');
const Tools = require('../models/ToolsModel');
var DoAm = {
    danhSach: function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        var body = req.query;
        DoAmModel.find({ mathietbi: body.mathietbi }, (err, data) => {
            if(err) {
                return res.status(500).send({ status: 500, error: err.message });
            }
            return res.status(200).send(data);
        });
    },
    them: function (req, res) {
        var body = req.query;
        var doam = new DoAmModel();
        
        if(!Tools.isEmpty(body.mathietbi))
        {
            doam.mathietbi = body.mathietbi;
        }
        if(!Tools.isEmpty(body.doam))
        {
            doam.doam = body.doam;
        }

        doam.save((err, data) => {
            if (err) {
                return res.status(500).send({ status: 500, message: err.errmsg });
            }
            return res.status(200).send({ status: 200, message: 1 });
        });
    },
    capNhat: function (req, res) {
        var body = req.query;
        DoAmModel.findById(body._id, function (err, rs) {
            if (err) {
                return res.status(500).send({ status: 500, error: err.message });
            }
            if (rs) {
                /*if (!Tools.isEmpty(body.tenden)) {
                    rs.tenden = body.tenden;
                }
                if (!Tools.isEmpty(body.manhaluoi)) {
                    rs.manhaluoi = body.manhaluoi;
                }
                if (!Tools.isEmpty(body.mathietbi)) {
                    rs.mathietbi = body.mathietbi;
                }
                if (!Tools.isEmpty(body.chandieukhien)) {
                    rs.chandieukhien = body.chandieukhien;
                }
                if (!Tools.isEmpty(body.trangthai)) {
                    rs.trangthai = body.trangthai;
                }*/
                rs.mathietbi=body.mathietbi,
                rs.doam=body.doam,
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
        DoAmModel.findByIdAndRemove( body._id, (err, tk) => {
            if (err) {
                return res.status(500).send({ status: 500, message: err.errmsg });
            }
            return res.status(200).send({ status: 200, message: 1 });
        });
    },
}
module.exports = DoAm;