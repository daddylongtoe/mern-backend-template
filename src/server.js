import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes/index.js';

const app = express();

const PORT = 8080;

app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
