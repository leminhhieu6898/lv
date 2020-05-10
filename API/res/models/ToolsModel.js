var crypto = require('crypto');
var ToolModel = {
    maHoaMatKhau : function(value){
        var hash = crypto.createHmac('sha512', value);
        data = hash.update(value, 'utf-8');
        return data.digest('hex');
    },
    isEmpty: function(value){
        return !(value != null && value !== 'undefined');

    },
    response: function(code, text){
        return {status: code, message: text};
    }
};
module.exports = ToolModel;