#!/usr/bin/env node

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
// you can pass the parameter in the command line. e.g. node static_server.js 3000
const fromPort = process.argv[2] || 7070;
const toPort = process.argv[3] || 8080;
const latency = process.argv[4] || 300;

// console.log('arguments: ', process.argv);

http.createServer(function (req, res) {
  console.log(`${req.method} ${req.url}`);
  // console.log(`${JSON.stringify(req.headers)}`);

  var options = {
    hostname: 'localhost',
    port: toPort,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  const proxy = http.request(options, function (response) {
    for(let name in response.headers) {
      res.setHeader(name, response.headers[name]);
    }

    setTimeout(function () {
      response.pipe(res, {
        end: true
      });
    }, latency);
  });

  req.pipe(proxy, {
    end: true
  });
}).listen(parseInt(fromPort));

console.log(`localhost:${fromPort} <-- ${latency} ms <-- localhost:${toPort}`);
