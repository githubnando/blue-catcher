#!/usr/bin/node

const request = require('request');
const exec = require('child_process').exec;
const sys = require('sys');

const argv = require('./args');

const owner =  argv.owner;
const options = {
    url: `https://bitbucket.org/!api/1.0/users/${owner}`,
    auth: {
      user: argv.username,
      pass: argv.password
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
