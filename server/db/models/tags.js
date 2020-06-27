const Sequelize = require('sequelize')
const db = require('../db')

const Tags = db.define('tags', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  tagNames: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  remSleepTime: {
    type: Sequelize.INTEGER
  }
})

module.exports = Tags
