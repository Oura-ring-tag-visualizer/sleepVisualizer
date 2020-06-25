const router = require('express').Router()
const {Tags} = require('../db/models')
module.exports = router
const {Op} = require('sequelize')

// router.get('/:tagName', async (req, res, next) => {
//   try {
//     const data = await Tags.findAll({
//       where : {
//         tagNames
//       }
//     })

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
        }
      }
    })
    console.log(dates)
    res.json(dates)
  } catch (err) {
    next(err)
  }
})
