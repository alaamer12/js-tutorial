const path = require("path")

console.log(path.delimiter)
// console.log(path.posix)
console.log(path.sep)
// console.log(path.win32)

const filePath = path.join(__dirname, "content", "subcontent", "text.txt")
const abs = path.resolve(__dirname, "content", "subcontent", "text.txt");
console.log(filePath)
console.log(abs)
console.log(abs === filePath)
