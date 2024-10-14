const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "💫",
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
╔═════════════════════════◊
let madeMenu = `📌️ `🇼 🇪 🇱 🇨 🇴 🇲 🇪 🤖`

`ＤＡＲＫ Ｘ ＭＤ` 🚀

> 🚀 `ＲＵＮＴＩＭＥ` : ${uptime}
> 🚀 `ＭＯＤＥ` : ${mode} 
> 🚀 `ＲＡＭ` : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
> 🚀 `ＰＲＥＦＩＸ` ${s.PREFIXE}

> `ＴＹＰＥ ＮＵＭＢＥＲ ＧＥＴ ＭＥＮＵ 🔢`

> `Ｆｏｌｌｏｗ ｔｈｅｓｅ ｓｔｅｐｓ`

`ＥＸＡＭＰＬＥ`

> `ＧＥＴ ＭＡＩＮ ＭＥＮＵ ＴＹＰＥ`
 
*🔢  .０１*

`🥷 01. ＭＡＩＮ ＭＥＮＵ`
`🥷 02. ＤＯＷＮＬＯＡＤ ＭＥＮＵ`
`🥷 03. ＯＷＮＥＲ ＭＥＮＵ`
`🥷 04. ＧＲＯＵＰ ＭＥＮＵ`
`🥷 05. ＳＥＲＡＣＨ ＭＥＮＵ`


> `📌️ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙY ᴅᴀʀᴋ x ᴛᴇᴀᴍ` 👤
`
    
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

