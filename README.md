# psuauth
JavaScript authentication module for Penn State (LDAP)

## Environment:
node version: 0.12.7
npm version: 2.11.3

Please refer to 'package.json' for packages versions.

## Install
```
npm install psuauth
```

## Example
```
var psuauth = require('psuauth');
var Q = require('q');
psuauth('', '') // first argument is username, secone argument is password
.then(function(info) {
  console.log(info);
})
.fail(function(err) {
  console.log(err);
});
```
