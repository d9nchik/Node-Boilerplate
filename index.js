'use strict';
import { requestListener } from './src/main.js';
import http from 'http';
const PORT = /*process.env.PORT*/ 3000;

const server = http.createServer(requestListener);
server.listen(PORT);

// TODO: better test for server
// TODO: rewrite README.md
