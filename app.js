"use strict";

var Q = require('q');
var LdapAuth = require('ldapauth-fork');

// Penn State LDAP server parameters configuration
var server = {
  url: 'ldap://dirapps.aset.psu.edu',
  searchBase: 'dc=psu,dc=edu',
  searchFilter: '(uid={{username}})'
};

/**
 * PSUAuth Module Interface
 *
 * Parameters:
 * @username  string  Penn State User ID (not the pure digital one)
 * @password  string  User password
 * @return  A Q promise
 *
 */
module.exports = function(username, password) {
  var deferred = Q.defer();
  var ldap = new LdapAuth(server);
  ldap.authenticate(username, password, function(err, user) {
    ldap.close(function(){}); // We don't care about the closing
    if (err) {
      deferred.reject(new Error(err));
    } else {
      deferred.resolve(user);
    }
  });
  return deferred.promise;
};
