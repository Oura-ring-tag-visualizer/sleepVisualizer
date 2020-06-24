const Sequelize = require('sequelize')
const db = require('../db')

const Rem = db.define('rem', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  remSleepTime: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Rem.beforeCreate(function(rem) {
  return rem.remSleepTime / 60
})

module.exports = Rem
