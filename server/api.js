const express = require('express');

const controller = require('./controller');

const router = express.Router();


// gets all rows from public.user table
router.get('/', controller.get, (req, res) =>
  res.status(200).json(res.locals.allInfo)
);

// posts data into a row in the public.user table
router.post('/events', controller.postEvent, (req, res) =>
  res.status(201).json(res.locals.allEvents)
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




module.exports = router;
