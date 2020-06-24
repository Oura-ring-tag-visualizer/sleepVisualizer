const Sequelize = require('sequelize')
const db = require('../db')

const Tags = db.define('tags', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  tagName: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Tags
