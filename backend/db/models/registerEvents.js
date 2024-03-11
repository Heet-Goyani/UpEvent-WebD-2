import { Sequelize } from "sequelize";
import {sequelize} from "../connection.js";
import User from "./users.js";
import Event from "./events.js";

// Events saved by users

class registerEvent extends Sequelize.Model {}

registerEvent.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }
  },
  {
    sequelize,
    modelName: "registerEvents",
    className: "registerEvent", 
    timestamps: false,
  }
);

export default registerEvent;
