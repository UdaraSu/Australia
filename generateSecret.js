const crypto = require('crypto');

// Generate a 64-byte random key (hex format)
const secretKey = crypto.randomBytes(64).toString('hex');
console.log(secretKey);
