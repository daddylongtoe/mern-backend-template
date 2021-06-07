import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes/index.js';
import { db } from './db/index.js';

const app = express();

const PORT = 8080;

app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const start = async () => {
  await db.connect('mongodb://localhost:27017');
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

start();
