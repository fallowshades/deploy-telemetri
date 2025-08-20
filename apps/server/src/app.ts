import cors from "cors";
import express from "express";
import morgan from "morgan";

import routes from "./routes";

const app: express.Express = express();

import type { User } from '@monorepo/types';

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({ message: 'API is running successfully!' });
});

app.get('/users', (req, res) => {
  const users: User[] = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' }
  ];
  res.json(users);
});


app.use(morgan("tiny"));

app.use(express.json({ limit: "100mb" }));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use("/v1", routes);

export default app;
