// print filename
// console.log(__filename);
// print directory
// console.log(__dirname);

function bytestoMB(bytes) {
    return (bytes / 1024 / 1024).toFixed(2);
}
function secondsToMinutes(seconds) {
    return (seconds / 60).toFixed(2);
}

const os = require('os');
os.res

// This is show platform information
console.log(os.platform());
// This is show version
console.log(os.homedir())
// This is show end of line
console.log("befor end of line" + os.EOL + "after end of line"); 
// This is show architecture
console.log(os.arch());
// This is show release
console.log(os.release());
// This is show total memory
console.log(bytestoMB(os.totalmem()));
// This is show free memory
console.log(bytestoMB(os.freemem()));
// This is show cpus
console.log(os.cpus());
// This is show cpus length
console.log(os.cpus().length);
// This is show uptime
console.log(secondsToMinutes(os.uptime()));
// This is show userInfo
console.log(os.userInfo());
// This is show availableParallelism
console.log(os.availableParallelism());
// This is show endianness
console.log(os.endianness())
// This is show priority
console.log(os.getPriority())
// This is show hostname
console.log(os.hostname())
// This is show username
console.log(os.userInfo().username)
// This is show loadavg
console.log(os.loadavg())
// This is show networkInterfaces
console.log(os.networkInterfaces())
// This is show tmpdir
console.log(os.tmpdir())
// This is show type
console.log(os.machine())
// This is show type
console.log(os.type())
