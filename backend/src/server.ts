import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { HttpError } from "./helpers/HttpError";
import { connect } from "mongoose";
import cors from "cors";

const app = express();

dotenv.config();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use(routes);

// catch wrong routes
app.use((request, response, next) => {
  return next(new HttpError("This route does not exists!", 404));
});

// catch errors
app.use((err: HttpError, request, response, next) => {
  if (err.message) {
    response.status(err.errorCode);
    return response.json({ errorMessage: err.message });
  }

  return response.status(500).json({ errorMessage: "Unknown error" });
});

// connecting database
const databaseUri = process.env.DB_URI;
(async () => {
  try {
    await connect(databaseUri as string);
    console.log("Connected to the database!");
  } catch (err) {
    throw new Error("Can't connect to the database");
  }
})();

// running server
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
