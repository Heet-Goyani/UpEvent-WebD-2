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
    },
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: User,
        key: "id",
      },
    },
    eventId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: Event,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "bookmarkEvents",
    timestamps: false,
  }
);

export default bookmarkEvent;
