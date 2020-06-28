const router = require('express').Router()
const {Tags} = require('../db/models')
const {Op} = require('sequelize')
const sequelize = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const dates = await Tags.findAll({
      order: [['date', 'ASC']]
    })
    res.json(dates)
  } catch (error) {
    next(error)
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
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newDate = await Tags.create(req.body)
    res.status(201).json(newDate)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const findTagArrayToUpdate = await Tags.findOne({
      where: {
        date: req.body.date
      }
    })
    console.log('hello', findTagArrayToUpdate)
    const updateDate = await Tags.update(
      {
        tagNames: [...findTagArrayToUpdate.tagNames, ...req.body.tagNames],
        remSleepTime: req.body.remSleepTime
      },
      {
        where: {
          date: req.body.date
        }
      }
    )
    res.status(201).json(updateDate)
  } catch (error) {
    next(error)
  }
})
