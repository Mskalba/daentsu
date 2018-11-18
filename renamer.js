const fs = require('fs');
fs.rename('./example.json', 'sample.json', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});