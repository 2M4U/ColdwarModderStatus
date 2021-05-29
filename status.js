const { loopStatus } = new (require('./lib/functions/requests'));
const { log, title, clear, processes } = new (require('./lib/log/console'));

clear();
log("COLD WAR AUTO STATUS & DISCORD ADVERTISER","Developed By https://github.com/CyberCDN\n\n")
loopStatus();
title();
processes();