const router = require('express').Router()
const {Tags, Rem} = require('../db/models')
module.exports = router

router.get('/:tagName', async (req, res, next) => {
  try {
    const tagDate = await Tags.findAll({
      where: {
        tagNames: req.params.tagNames
      }
    }).spread(found => {
      return Rem.findAll({
        where: {
          date: found.date
        }
      })
    })
    const findDate = await Rem.findAll({
      where: {
        date: tagDate.date
      },
      include: {all: true, nested: true}
    })

    res.json(findDate)
  } catch (err) {
    next(err)
  }
})
