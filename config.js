const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "QTMWiKoI#4_ugoDhv8wVlvGYvPINqmHpW8Kx-qls3yrxh_K8VGU8",
MONGODB: process.env.MONGODB || "mongodb+srv://shanuawatech:@-Render-88@cluster0.he454.mongodb.net/",//enter mongo db url
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iuwjg1.jpg"
ALIVE-MSG: process.env.ALIVE_MSG || "Hello im alive now"
};
