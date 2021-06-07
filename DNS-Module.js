const dns = require('dns');
dns.lookup('www.github.com', (err, addresses, family) => {
    console.log('addresses:', addresses);
    console.log('family:', family);
});