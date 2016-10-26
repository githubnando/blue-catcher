#!/usr/bin/node

const request = require('request');
const exec = require('child_process').exec;
const sys = require('sys');
let owner =  '';
const options = {
    url: `https://bitbucket.org/!api/1.0/users/${owner}`,
    auth: {
      user: '',
      pass: ''
    }
};


request(options, function (error, response, body) {
  if (error !== null) {
    throw error
  }

  JSON.parse(body).repositories.map(function(repo) {
    // clone the repository
  })
});
