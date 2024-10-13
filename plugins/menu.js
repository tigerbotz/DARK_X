const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "📑",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}
let madeMenu = ` ╔═════════════════════════◊
PLEASE REPLY TO NUMBER ⌨️ 
0️⃣1️⃣ 'DOWNLODE MENU'
0️⃣2️⃣ 'GROUP MENU'
0️⃣3️⃣ 'OWNER MENU 
0️⃣4️⃣ 'SEARCH MENU' 
0️⃣5️⃣ 'MAIN MENU'     

TYPE NUMBER GET MENU 
EX :  .01 
MENU  
`
    
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

