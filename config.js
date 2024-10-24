const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HHRACSgL#KMc5qcyffm_q-3CMLagiA0I-MW51N66D88VHrQLUg34",
MONGODB: process.env.MONGODB || "mongodb+srv://shanuawatech:@-Render-88@cluster0.he454.mongodb.net/",//enter mongo db url
MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/bybjoo.png"
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bybjoo.png"
ALIVE-MSG: process.env.ALIVE_MSG || "Hello im alive now"
};
