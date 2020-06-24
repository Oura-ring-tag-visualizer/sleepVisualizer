const Sequelize = require('sequelize')
const db = require('../db')

const Rem = db.define('rem', {
  date: {
    type: Sequelize.DATEONLY
  },
  remSleepTime: {
    type: Sequelize.INTEGER
  }
})

// Rem.beforeCreate(function(rem) {
//   return rem.remSleepTime / 60
// })

module.exports = Rem
