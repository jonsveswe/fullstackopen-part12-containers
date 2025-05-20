const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/reset', async (req, res) => {
  await redis.setAsync('visits', 0)
  await redis.setAsync('counter', 0)
  res.sendStatus(200);
});

router.get('/statistics', async (req, res) => {
  const counter = await redis.getAsync('counter')
  res.send({
    "added_todos": counter
  });
});

module.exports = router;
