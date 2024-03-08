import express from "express";
import bodyParser from "body-parser";
import { sequelize, testConnection } from "./db/connection.js";
import User from "./db/models/users.js";

const app = express();
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Hello World from UpEvent!!");
});

app.listen(3000, () => {
  testConnection();
  (async () => {
    await sequelize.sync({ alter: true });

    // const himanshu = User.build({
    //   username: "Himanhsu Kabra",
    //   email: "himanshu@gmail.com",
    //   password: "123456",
    // });
    // await himanshu.save();
    // console.log(himanshu); // true
    // console.log(himanshu.username); // "Jane"

    // let data = await User.findAll({
    //   attributes: {
    //     exclude: ["password"],

    //     // Note the use of sequelize.fn and sequelize.col here

    //     // include: [
    //     //   [sequelize.fn("CONCAT", sequelize.col("username")), "fullName"]
    //     // ]
    //   },
    // });

    // console.log(data);

    // let data = await sequelize.query("SELECT * FROM users", {
    //   type: sequelize.QueryTypes.SELECT,
    //   model: User,
    //   mapToModel: true
    // });
    // data[0].username = "Hishal Harma";
    // await data[0].save();
    // console.log(data[0]['username']);
    
  })();

  console.log(
    "<<--------------------------------------------------------->>\n\nApplication is running, Use Ctrl + click on following URL :\nhttp://localhost:3000/hello\n\n<<--------------------------------------------------------->>"
  );
});
