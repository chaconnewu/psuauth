var psuauth = require('psuauth');
var Q = require('q');
psuauth('', '')
.then(function(info) {
  console.log(info);
})
.fail(function(err) {
  console.log(err);
});
