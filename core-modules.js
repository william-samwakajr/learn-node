//the os module
const os = require('os');

console.log(`Host: ${os.hostname()}`);
console.log(`os: ${os.type}`);
console.log(`OS version: ${os.release()}`);
console.log(`Total memory:${os.totalmem()}bytes`);
console.log(`free memory: ${os.freemem()} bytes`);