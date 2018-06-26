'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize

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
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'question'
  })


  return Question
}
