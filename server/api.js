const express = require('express');

const controller = require('./controller');

const router = express.Router();

// gets all rows from public.user table
router.get('/users', controller.getUsers, (req, res) =>
  res.status(200).json(res.locals.userInfo)
);

// gets all incidents from public.incident table
router.get('/incidents', controller.getIncidents, (req, res) =>
  res.status(200).json(res.locals.incidentInfo)
);

// gets all incidents from pulblic.user by userId
router.get('/incidents/userId/:userId', controller.getIncidentByUserId, (req, res) =>
  res.status(200).json(res.locals.incidentByUserId)
);

// gets all incidents from public.incident by street name. Can target address, city, state, or zipcode
router.get('/incidents/location/:name', controller.getIncidentByStreetName, (req, res) =>
  res.status(200).json(res.locals.incidentByStreetName)
);

// posts data into a row in the public.incident table
router.post('/postevent', controller.postEvent, (req, res) =>
  res.status(201).json(res.locals.allEvents)
);

// posts data into a row in the public.user table
router.post('/newuser', controller.newUser, (req, res) =>
  res.status(201).json(res.locals.newUser)
);

router.put('/incidents/update-title:id', controller.updateIncidentTitle, (req, res) =>
res.status(200).json('Title was updated!')
);

router.put('/incidents/update-streetname:id', controller.updateIncidentStreetName, (req, res) =>
res.status(200).json('streetname was updated!')
);

router.put('/incidents/update-video:id', controller.updateIncidentVideo, (req, res) =>
res.status(200).json('video was updated!')
);

router.put('/incidents/update-image:id', controller.updateIncidentImage, (req, res) =>
res.status(200).json('image was updated!')
);

router.put('/incidents/update-details:id', controller.updateIncidentDetails, (req, res) =>
res.status(200).json('details was updated!')
);







// router.get('/recent', (req, res) =>
//   res.status(200).json(res.locals.recent)
// );

module.exports = router;
