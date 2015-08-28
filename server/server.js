// Node
import path from 'path';
import fs from 'fs';

// Express
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Webpack
import httpProxy from 'http-proxy';
import webpackDevServer from './webpackDevServer.js';

// Other packages
import opn from 'opn';

const server = express();
const proxy = httpProxy.createProxyServer();
const IS_PRODUCTION = process.env.IS_PRODUCTION === 'production';
const PORT = IS_PRODUCTION ? 8080 : 3000;
const devPath = path.resolve(__dirname, '..', 'src');

server.use(express.static(devPath));

if(!IS_PRODUCTION) {
    webpackDevServer();

    server.all('/build/*', (req, res) => {
        proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
    });
}

proxy.on('error', function() {
    console.log('Could not connect to proxy, please try again...');
});

server.get('/api', (req, res) => {
	res.end('This route is for API')
});

server.listen(PORT, () => {
	console.log(`Server running on: ${PORT}`);
	opn(`http://localhost:${PORT}`);
})