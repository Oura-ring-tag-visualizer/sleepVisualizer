const router = require('express').Router()
const {Tags, Rem} = require('../db/models')
module.exports = router

router.get('/:tagName', async (req, res, next) => {
  try {
    const dates = await Tags.findAll({
      where: {
        tagNames: req.params.tagName
      },
      include: [
        {
          model: Rem,
          attributes: ['remSleepTime']
        }
      ]
    })
    console.log(dates)
    res.json(dates)
  } catch (err) {
    next(err)
  }
})
