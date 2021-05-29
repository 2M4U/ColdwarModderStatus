const { Client } = require('discord-rpc');
const config = require('../settings/config.json');
const client = new Client({ transport: 'ipc' });
const { log,error } = new (require('../log/console'));
function buttons() {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        state: config.status.state,
        details: config.status.details,
        activity: {
            assets: {
                large_image: config.assets.image_key,
                large_text: config.assets.image_text,
            },
            buttons: [
                { label: config.button_one.label_name, url: config.button_one.label_url },
                { label: config.button_two.label_name, url: config.button_two.label_url },
            ],
            instance: config.instance || true
        },
    });

    client.on('ready', async () => {
        log("CUSTOM BUTTONS",`Auto-Linked to ${client.user.username}#${client.user.discriminator} & Showing!`)
    });

    client.login({ clientId: config.client_id }).catch((error)=>{
        error("BUTTON ERROR", error)
    });
}
module.exports = buttons;