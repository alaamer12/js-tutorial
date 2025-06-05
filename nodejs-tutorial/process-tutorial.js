// Starting
const os = require("os")

console.log(process.arch)
console.log(os.arch() === process.arch) // True
// console.log(process.allowedNodeEnvironmentFlags)
console.log(process.argv)
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv0);
// console.log(process.config)
console.log(process.execArgv)
console.log(process.env);
console.log(process.memoryUsage());
console.log(process.version);
console.log(process.versions)

console.log(process.title)
console.log(process.execPath)

console.log(process.cwd())
console.log(__dirname)
console.log(process.cwd() === __dirname);
