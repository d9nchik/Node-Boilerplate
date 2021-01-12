'use strict';
import { requestListener } from './src/main.js';
import process from 'process';
import http from 'http';

const PORT = process.env.PORT || 3000;

export const server = http.createServer(requestListener);

server.listen(PORT);
