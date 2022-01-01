const express = require('express');

const controller = require('./controller');

const router = express.Router();



router.get('/', controller.get, (req, res) =>
  res.status(200).json(res.locals.all)
);

// router.get('/location', (req, res) => {
//   res.status(200).json(res.locals.location)
// });

// router.get('/username', (req, res) => {
//   res.status(200).json(res.locals.username)
// });

// router.get('/recent', (req, res) =>
//   res.status(200).json(res.locals.recent)
// );

router.post('/event', controller.newEvent, (req, res) =>
  res.status(201).json(res.locals.newEvent)
);

module.exports = router;
