const mongoose = require('mongoose');
const TaiKhoanSchema = new mongoose.Schema({
    tendn: {
        type: String,
    },
    matkhau: {
        type: String,
    },
    quyen: {
        type: String,
        default: "user"
    }
});
module.exports = mongoose.model('taikhoan', TaiKhoanSchema);