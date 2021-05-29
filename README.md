# Coldwar Modder Status

Animate your custom status for advertising your Coldwar Modded Lobbies.

#### _DISCLAIMER_
***I am not responsible for any bans resulting in using this. Use at your own risk.***

---

# Requirements
- [NodeJS](https://nodejs.org/en/)
- [Basic JSON knowledge](https://www.json.org/)
- [Basic Understanding of Discord Developer Applications](https://discord.dev)

# Installation
1. Download repository
2. Unzip
3. Open a command prompt inside the folder
4. Enter `npm install`
5. Adjust your `config.json` - [Read More](#Config)
6. Enter `node status.js` or `node .`

# Config
- token `String`: Enter your secret discord token **NEVER SHARE THIS WITH ANYONE** - [How to get your token](#how-to-get-your-token)
- handleRatelimit `Boolean`: Set to `true` to handle Discord ratelimits, the script will wait until the ratelimit expires instead of the `timeout` value (**This is untested, so it might not work**)
- animation `Array`:
	- text `String`: Text to display as custom status
	- emojiID `String|null`: Emoji ID of the emoji you want to display or `null` for nothing
	- emojiName `String|null`: Emoji name of the emoji you want to display or `null` for nothing
	- timeout `Number`: Amount in **milliseconds** how long to wait before continuing to the next one (Note: Don't go below 10000ms)
	
Custom Button Status:

- client_id: Go to https://discord.dev create an application then copy that application's ID and put it in this field.

- assets: 
	- image_key: you can change this on https://discord.dev 
- button_one:
	- label_url: you can change this to your own Youtube Link.
- button_two:
	- label_url: you can change this to your own Discord Invite Link. 
```json
"instance": true,
    "client_id": "848125402248511528", 
    "status": {
        "state": "🌟 Max Lvl + Camos 🌟",
        "details": "🔥 Dark Aether + More 🔥"
    },
    "assets": {
        "image_text": "Free ColdWar Lobbies",
        "image_key": "smoking" 
    },
    "button_one": {
        "label_name": "Youtube Channel",
        "label_url": "https://youtube.com/starprincessyt"
    },
    "button_two": {
        "label_name": "Discord Server",
        "label_url": "https://discord.gg/smokingbabe420"
    }
```
# How to get your token
Go to Discord and open the developer console using `CTRL` + `SHIFT` + `I`, go to the console tab and enter this code
```JS
webpackJsonp.push([[],{extra_id:(e,r,t)=>e.exports=t},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let r=req.c[e].exports;if(r&&r.__esModule&&r.default)for(let e in r.default)"getToken"===e&&console.log(r.default.getToken())}
```

It should now output your token which will look like random letters and numbers, etc. That is your token, put the **whole** thing as your token.
