import http from 'http';
import app from './config/app';

const server = http.Server(app);
server.listen(3000, () => {
       return true;
});