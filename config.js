const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "snEkjBRT#MAvHESJ3_k_PRPFDI_I1_71hxhsZjOAjF2s30n-tFN4",
MONGODB: process.env.MONGODB || "mongodb+srv://shanuawatech:@-Render-88@cluster0.he454.mongodb.net/",//enter mongo db url
MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/bybjoo.png"
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bybjoo.png"
ALIVE-MSG: process.env.ALIVE_MSG || "Hello im alive now"
};
