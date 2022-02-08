import express from "express";
import { createConnection } from "typeorm";
import { router } from "./routes";

createConnection()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => console.error(err));

const app = express();

app.use(express.json());

app.use(router);

const port = 3333;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
