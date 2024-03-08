import { Sequelize } from "sequelize";

let dbname = process.ENV.DATABASE_DBNAME || "up_event";
let hostname = process.ENV.DATABASE_HOSTNAME || "localhost";
let username = process.ENV.DATABASE_USERNAME || "root";
let password = process.ENV.DATABASE_PASSWORD || "root";


const sequelize = new Sequelize(dbname, username, password, {
  host: hostname,
  dialect: "mysql",
  define : {
    freezeTableName: true,
    // timestamps: false,
    // underscored: true
  }
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({alter:true});
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { sequelize, testConnection };
