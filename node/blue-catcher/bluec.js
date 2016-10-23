#!/usr/bin/node


var request = require('request'),
  exec = require('child_process').exec,
  sys = require('sys'),
  owner =  '',
  options = {
    url: `https://bitbucket.org/!api/1.0/users/${owner}`,
    auth: {
      user: '',
      pass: ''
    }
  }


request(options, function (error, response, body) {
  if (error !== null) {
    throw error
  }

  JSON.parse(body).repositories.map(function(repo) {
    // clone the repository
  })
})