import { Sequelize } from "sequelize";
import { sequelize } from "../connection.js";
import User from "./users.js";
import Event from "./events.js";

// Events registered by users and whom notifications are sent

class registerEvent extends Sequelize.Model {}

registerEvent.init(
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
    modelName: "registerEvents",
    className: "registerEvent",
    timestamps: false,
  }
);

export default registerEvent;
