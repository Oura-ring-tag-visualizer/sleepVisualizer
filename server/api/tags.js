const router = require('express').Router()
const {Tags} = require('../db/models')
const {Op} = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const dates = await Tags.findAll()
    res.json(dates)
  } catch (err) {
    next(err)
  }
})

router.get('/:tagName', async (req, res, next) => {
  try {
    const dates = await Tags.findAll({
      where: {
        tagNames: {
          [Op.contains]: [req.params.tagName]
        }
      }
    })
    console.log(dates)
    res.json(dates)
  } catch (err) {
    next(err)
  }
})
