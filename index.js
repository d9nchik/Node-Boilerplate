'use strict';
import { requestListener } from 'src/index';
import http from 'http';
const PORT = /*process.env.PORT*/ 3000;

const server = http.createServer(requestListener);
server.listen(PORT);
