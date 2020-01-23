'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    whatToDo: DataTypes.STRING,
    description: DataTypes.STRING,
    startFrom: DataTypes.DATE,
    deadLine: DataTypes.DATE,
    status: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      timestamps: true,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      timestamps: true,
      type: DataTypes.DATE
    }
  }, {
    tableName: "todo",
  });
  ToDo.associate = function (models) {
  };
  return ToDo;
};