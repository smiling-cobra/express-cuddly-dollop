const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
    console.log('Request object:', req);

    let service = require('./service');
    const requestUrl = url.parse(req.url, true);
  
    // GET endpoint
    if (requestUrl.pathname === '/sample' && req.method === 'GET') {
        // GET request handling goes here
        console.log('Request Type:' + req.method + ' Endpoint: ' + requestUrl.pathname);
        service.sampleRequest(req, res);
    } else if (requestUrl.pathname == '/test' && req.method === 'POST') {
        // POST request handling goes here
        console.log('Request Type:' + req.method + ' Endpoint: ' + requestUrl.pathname);
        service.testRequest(req, res);
    } else {
        console.log('Request Type:' + req.method + ' Invalid Endpoint: ' + requestUrl.pathname);
        service.invalidRequest(req, res);
    }
});