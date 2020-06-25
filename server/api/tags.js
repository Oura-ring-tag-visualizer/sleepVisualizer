const router = require('express').Router()
const {Tags, Rem} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const dates = await findAll({
      where: {
        tagNames: req.body.tagNames
      },
      include: {
        model: Rem
      }
    })
    res.json(dates)
  } catch (err) {
    next(err)
  }
})
