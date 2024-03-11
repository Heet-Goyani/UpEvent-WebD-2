import { Sequelize } from "sequelize";
import {sequelize} from "../connection.js";
import User from "./users.js";
import Event from "./events.js";

// Events saved by users

class bookmarkEvent extends Sequelize.Model {}

bookmarkEvent.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }
  },
  {
    sequelize,
    modelName: "bookmarkEvents",
    className: "bookmarkEvent", 
    timestamps: false,
  }
);

export default bookmarkEvent;
