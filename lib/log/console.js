const chalk = require("chalk");
const config = require('../settings/config.json');
const setTitle = require('node-bash-title');

const time = () => (`${chalk.grey(new Date().toLocaleString('en', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: config.timeZone ? config.timeZone : 'Europe/London',
    hour12: true
}))}`);

class Console {
    log(source, content) {
        return console.log(`[${time()}] ${chalk.blueBright("INFO")} [${source}]: ${content}`);
    };

    warn(source, content) {
        return console.log(`[${time()}] ${chalk.yellowBright("WARN")} [${source}]: ${content}`);
    };

    error(source, content) {
        return console.log(`[${time()}] ${chalk.redBright("ERROR")} [${source}]: ${content}`);
    };
    title() {
        return setTitle('ᴄᴏʟᴅ ᴡᴀʀ ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ & ᴅɪꜱᴄᴏʀᴅ ᴀᴅᴠᴇʀᴛɪꜱᴇʀ ʙʏ ᴄʏʙᴇʀᴄᴅɴ');
    }
    clear(){
        return console.clear();
    }
    processes(){
        process.on('unhandledRejection', (error) => {
            //console.error("[UNHANDLED REJECTION] " + (error));
        });
        process.on('uncaughtException', (error) => {
            //console.log("[UNCAUGHT EXCEPTION] " + (error));
        });
    }
};

module.exports = Console;