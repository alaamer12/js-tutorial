const fs = require('fs');

const data =  fs.readFileSync("x.txt", "utf8", function (err, data) {
    if (err) {
        console.error(err)
    }
    
    else return data
})
// console.log(data)

// fs.writeFile("w.txt", data)
// Deprectated not recommended
const isExist = fs.exists("/etc/passwd", exists => {
	console.log(exists ? "Found" : "Not Found!");
}); 
console.log(isExist)

// use fs.access instead
if (!fs.existsSync("./test"))
    fs.mkdirSync("./test", { recursive: true }, (err) => {
        if (err) throw err;
    });

fs.truncate('./y.txt', function (err, bytes) {
    if (err) {
        console.log(err);
    }
    else console.log("bytes are: ", bytes)
})

fs.writeFile("example.txt", data, err => {
	if (err) {
		console.error(err);
		return;
	}
	console.log("File written successfully");
});

console.log("Current Directory Path:", __dirname);

// fs.createReadStream('x.txt').pipe(fs.createWriteStream('xx.txt'));


// Finding the canonical path
// one directory up
path1 = __dirname + "\\..";

fs.realpath(path1, (error, resolvedPath) => {
	if (error) {
		console.log(error);
	} else {
		console.log("One directory up resolved" + " path is: ", resolvedPath);
	}
});

var path = 'y.txt'; 
   
// Declare a buffer and write the 
// data in the buffer 
let buffer = new Buffer.from('GeeksforGeeks: '
    + 'A computer science portal for geeks\n'); 
   
// The fs.open() method takes a "flag" 
// as the second argument. If the file 
// does not exist, an empty file is 
// created. 'a' stands for append mode 
// which means that if the program is 
// run multiple time data will be 
// appended to the output file instead 
// of overwriting the existing data. 
fs.open(path, 'a', function(err, fd) { 
  
    // If the output file does not exists 
    // an error is thrown else data in the 
    // buffer is written to the output file 
    if(err) { 
        console.log('Cant open file'); 
    }else { 
        fs.write(fd, buffer, 0, buffer.length,  
                null, function(err,writtenbytes) { 
            if(err) { 
                console.log('Cant write to file'); 
            }else { 
                console.log(writtenbytes + 
                    ' characters added to file'); 
            } 
        }) 
    } 
}) 
