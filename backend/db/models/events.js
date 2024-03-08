import { Sequelize } from "sequelize";
import { sequelize } from "../connection.js";
import Organiser from "./organisers.js";

class Event extends Sequelize.Model {}

Event.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    organiserId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: Organiser,
        key: "id",
      },
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.DataTypes.TEXT("long"),
      allowNull: false,
    },
    date: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: Sequelize.DataTypes.TIME,
      allowNull: false,
    },
    available: {
      type: Sequelize.DataTypes.ENUM("online", "offline"),
      allowNull: false,
      defaultValue: "offline",
    },
    venue: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      validate: {
        validateVenue(value) {
          if (this.available === "offline" && !value) {
            throw new Error("Venue is required for offline events");
          }
        },
      },
    },
    meetLink: {
      type: Sequelize.DataTypes.STRING,
      validate: {
        isUrl: true,
        validateMeetLink(value) {
          if (this.available === "online" && !value) {
            throw new Error("Meet link is required for online events");
          }
        },
      },
    },
    registerationLink: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    image: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "events",
    tableName: "events",
  }
);
