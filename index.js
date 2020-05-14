var parser = require('bleadvertise');

var myArgs = process.argv.slice(2);
var input = myArgs.join('').replace(/([^0-9a-f]|0x)/gi, '');

if(input.length == 0 || input.length % 2 != 0) {
	console.error("Invalid input: "+input);
	process.exit(1);
	return;
}

console.log("\nParsing input: "+input);

var payload = Buffer.from(input, "hex");
var payloadWithLength = Buffer.concat([Buffer.from([payload.length]), payload]);

// Parse (little-endian by default)
var packets = parser.parse(payloadWithLength);

console.log("");
console.log("Parsed output:\n")
for (var i = 0; i < packets.length; i++) {
	console.log(packets[i].type);
	console.log(packets[i].data);
	console.log("");
}
