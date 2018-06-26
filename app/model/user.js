'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize

  const User = app.model.define('User', {
    id: {
      type: INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: {
      type: STRING(20),
      unique: true,
      allowNull: false
    },
    password: {
      type: STRING(64),
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'user'
  })


  return User
}
