const router = require('express').Router()
const {Tags} = require('../db/models')
const {Op} = require('sequelize')
module.exports = router
const sequelize = require('sequelize')

router.get('/', async (req, res, next) => {
  try {
    const dates = await Tags.findAll({
      order: [['date', 'ASC']]
    })
    res.json(dates)
  } catch (err) {
    next(err)
  }
})

// router.get('/:tagName', async (req, res, next) => {
//   try {
//     const dates = await Tags.findAll({
//       where: {
//         tagNames: {
//           [Op.contains]: [req.params.tagName]
//         }
//       }
//     })
//     console.log(dates)
//     res.json(dates)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/:tagName', async (req, res, next) => {
  try {
    const dates = await Tags.findAll({
      where: {
        tagNames: {
          [Op.contains]: [req.params.tagName]
        },
        attributes: [
          'remSleepTime',
          [sequelize.fn('AVG', sequelize.col('average')), 'avg']
        ]
      }
    })
    console.log(dates)
    res.json(dates)
  } catch (err) {
    next(err)
  }
})
