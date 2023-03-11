import * as express from "express";
import database from "./database";
import * as Routes from "./Routes"
const app = express();
app.use(express.json());
app.use('/user',Routes.Users);

app.listen(8080, async () => {
  await database.initialize();
  console.log("Start server http://localhost:8080");
});
