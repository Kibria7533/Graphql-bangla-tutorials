var express = require('express')
var router = express.Router()
const {collection} = require('../dbConfig/index')
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', async function (req, res) {
 
    const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
res.send(findResult)
 
})
// define the about route
router.post('/save',async function (req, res) {
    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);
    res.send(insertResult)
})

module.exports = router
