const endpoint = "https://discordapp.com/api/v9/users/@me/settings";
const request = require("request");
const config = require("../settings/config.json");
const { log, error, warn } = new (require('../log/console'));
const buttons = require('./buttons');
class Requests {

    async loopStatus() {
        if (!config.token) {
            error("INVALID TOKEN", 'Please Provide A Valid Token');
            return setTimeout(process.exit, 2000);
        }
        buttons();
        for (let anim of config.animation) {
            let res = new Requests().doRequest(anim.text, anim.emojiID, anim.emojiName).catch(console.error);
            log("CHANGE STATUS", `Text: ${anim.text}, EmojiID: ${anim.emojiID}, Emoji Name: ${anim.emojiName}`)
            if (!res) {
                return;
            }
            await new Promise(p => setTimeout(p, anim.timeout));
        }
        new Requests().loopStatus();
    };

    doRequest(text, emojiID = null, emojiName = null) {
        return new Promise((resolve, reject) => {
            request({
                method: "PATCH",
                uri: endpoint,
                headers: {
                    Authorization: config.token
                },
                json: {
                    custom_status: {
                        text: text,
                        emoji_id: emojiID,
                        emoji_name: emojiName
                    }
                }
            }, (err, res, body) => {
                if (err) {
                    reject(err);
                    error("Request Error", err)
                    return;
                }

                if (res.statusCode === 200) {
                    resolve(true);
                    return;
                }

                if ((res.headers["X-RateLimit-Remaining"] || 0) <= 0 && (res.headers["X-RateLimit-Reset-After"] || 0) > 0 && config.handleRatelimit) {
                    let ratelimit = res.headers["X-RateLimit-Reset-After"] * 1000;
                    console.log("Hit ratelimit: " + ratelimit + "ms");
                    warn("Hit ratelimit", `${ratelimit}ms`);
                    setTimeout(() => {
                        doRequest(text, emojiID, emojiName).then(resolve).catch(reject);
                    }, ratelimit);
                    return;
                }
                error("Invalid Status Code", res.statusCode);
                reject(new Error("Invalid Status Code: " + res.statusCode));
            });
        });
    }
}

module.exports = Requests;