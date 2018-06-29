'use strict'

module.exports = app => {
  const {
    INTEGER,
    STRING,
    BIGINT
  } = app.Sequelize

  const Question = app.model.define('Question', {
    id: {
      type: INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    method: {
      type: STRING(20),
      allowNull: false
    },
    wish: {
      type: STRING(10),
      allowNull: false
    },
    before: {
      type: STRING(10),
      allowNull: false
    },
    phone: {
      type: BIGINT(20),
      allowNull: false
    },
    content: {
      type: STRING(200),
      allowNull: false
    },
    userip: {
      type: STRING(200),
      allowNull: false
    },
    userurl: {
      type: STRING(200),
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'question'
  })


  return Question
}