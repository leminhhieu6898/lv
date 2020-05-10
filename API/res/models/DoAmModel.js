const mongoose = require('mongoose');
const mongooseDateFormat = require('mongoose-date-format');
const DoAmSchema = new mongoose.Schema({
    mathietbi: {
        type: String,
    },
    doam: {
        type: Number,
    },
    ngaygui: {
        type: Date,
        default: () => Date.now()
    }
});
DoAmSchema.plugin(mongooseDateFormat);
module.exports = mongoose.model('doam', DoAmSchema);