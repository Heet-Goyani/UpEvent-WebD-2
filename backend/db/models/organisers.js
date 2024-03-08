import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../connection.js";
import bcrypt from "bcrypt";

class Organiser extends Model {}

Organiser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        len: [3, 20],
      },
    },
    about: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    college: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    get(){
        return () => this.getDataValue("password");
    },
    set() {
      try {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(this.getDataValue("password"), salt);
        this.setDataValue("password", hash);
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  {
    sequelize,
    modelName: "organisers",
    tableName: "organisers",
  }
);

export default Organiser;
