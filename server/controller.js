const db = require('./database');

const controller = {};

controller.getUsers = async (req, res, next) => {
  try {
    // SQL command string
    const queryString = `SELECT * from public.user`;

    // db query function to get info from our database
    const result = await db.query(queryString);

    // db.query will return a giant nested object. We just need the data in the rows key
    const data = result.rows;

    // store data in res.locals.all to pass to api router
    res.locals.userInfo = data;
    return next();
  } catch (error) {
    return next({
      log: `getUsers controller ERROR`,
      message: {
        err: 'Error occurred in controller.getUsers. Check the server logs.',
      },
    });
  }
};

controller.getIncidents = async (req, res, next) => {
  try {
    // SQL command string
    const queryString = `SELECT * from public.incident`;

    // db query function to get info from our database
    const result = await db.query(queryString);

    // db.query will return a giant nested object. We just need the data in the rows key
    const data = result.rows;

    // store data in res.locals.all to pass to api router
    res.locals.incidentInfo = data;
    return next();
  } catch (error) {
    return next({
      log: `getIncident controller ERROR`,
      message: {
        err: 'Error occurred in controller.getIncidents. Check the server logs.',
      },
    });
  }
};

controller.getIncidentByUserName = async (req, res, next) => {
  console.log('req params', req.params);
  try {
    const { name } = req.params;
    // SQL command string
    const queryString = `SELECT name, photo from public.user WHERE name LIKE '%${name}%'`;

    // db query function to get info from our database
    const result = await db.query(queryString);

    // db.query will return a giant nested object. We just need the data in the rows key
    const data = result.rows;

    // store data in res.locals.all to pass to api router
    res.locals.incidentByUserName = data;
    return next();
  } catch (error) {
    return next({
      log: `getIncidentByUserName controller ERROR`,
      message: {
        err: 'Error occurred in controller.getIncidentByUserName. Check the server logs.',
      },
    });
  }
};

controller.getIncidentByStreetName = async (req, res, next) => {
  console.log(req.params);
  console.log(new Date(Date.now()).toString());
  try {
    const { name } = req.params;
    // SQL command string
    const queryString = `SELECT * from public.incident WHERE street_name LIKE '%${name}%'`;

    // db query function to get info from our database
    const result = await db.query(queryString);

    // db.query will return a giant nested object. We just need the data in the rows key
    const data = result.rows;

    // store data in res.locals.all to pass to api router
    res.locals.incidentByStreetName = data;
    return next();
  } catch (error) {
    return next({
      log: `getIncidentByStreetName controller ERROR`,
      message: {
        err: 'Error occurred in controller.getIncidentByStreetName. Check the server logs.',
      },
    });
  }
};

controller.postEvent = async (req, res, next) => {
  console.log(req.body);
  try {
    // capture the current date and time to insert into sql db
    const time = new Date(Date.now()).toLocaleString();

    // object destructuring the req.body to pass in to params
    const {
      title,
      street_name,
      video_url,
      image_url,
      details,

    } = req.body;
    const params = [
      // params will be passed to db query, to insert the data object to the sql db
      title,
      street_name,
      video_url,
      image_url,
      details,
      time,
    ];

    // SQL command to insert values into the following table(public.incident) columns
    const text = `
      INSERT INTO public.incident (title, street_name, video_url, image_url, details, time)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `;

    // our async function passing in the SQL command string 'text' and our params data
    const result = await db.query(text, params);

    // store the evaluated query result into res.locals.allEvents to pass to api router
    res.locals.allEvents = result.rows[0];
    return next();
  } catch (error) {
    return next({
      log: `controller.postEvent ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.postEvent. Check the server logs.',
      },
    });
  }
};

controller.newUser = async (req, res, next) => {
  console.log(req.body);
  try {
    // object destructuring the req.body to pass in to params
    const { name, password } = req.body;
    const params = [
      // params will be passed to db query, to insert the data object to the sql db
      name,
      password
    ];

    // SQL command to insert values into the following table(public.user) columns
    const text = `
      INSERT INTO public.user (
        name,
        password)
      VALUES ($1, $2)
      RETURNING *
      `;

    // our async function passing in the SQL command string 'text' and our params data
    const result = await db.query(text, params);

    // store the evaluated query result into res.locals.newUser to pass to api router
    res.locals.newUser = result.rows[0];
    return next();
  } catch (error) {
    return next({
      log: `controller.newUser ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.newUser. Check the server logs.',
      },
    });
  }
};

// updates fields in public.incident table by column name
controller.updateIncidentTitle = async (req, res, next) => {
  console.log('req.body', req.body);
  try {
    const { id } = req.params; // for sql WHERE
    const { title } = req.body; // for sql SET
    const text = `UPDATE public.incident SET title = $1 WHERE incident_id = $2`;

    await db.query(text, [title, id]);
    return next();
  } catch (error) {
    return next({
      log: `controller.updateIncidentTitle ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.updateIncidentTitle. Check the server logs.',
      },
    });
  }
};

controller.updateIncidentStreetName = async (req, res, next) => {
  console.log('req.body', req.body);
  try {
    const { id } = req.params; // for sql WHERE
    const { streetname } = req.body; // for sql SET
    const text = `UPDATE public.incident SET street_name = $1 WHERE incident_id = $2`;

    await db.query(text, [streetname, id]);
    return next();
  } catch (error) {
    return next({
      log: `controller.updateIncidentStreetName ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.updateIncidentStreetName. Check the server logs.',
      },
    });
  }
};

controller.updateIncidentVideo = async (req, res, next) => {
  console.log('req.body', req.body);
  try {
    const { id } = req.params; // for sql WHERE
    const { videoUrl } = req.body; // for sql SET
    const text = `UPDATE public.incident SET video_url = $1 WHERE incident_id = $2`;

    await db.query(text, [videoUrl, id]);
    return next();
  } catch (error) {
    return next({
      log: `controller.updateIncidentVideo ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.updateIncidentVideo. Check the server logs.',
      },
    });
  }
};

controller.updateIncidentImage = async (req, res, next) => {
  console.log('req.body', req.body);
  try {
    const { id } = req.params; // for sql WHERE
    const { imageUrl } = req.body; // for sql SET
    const text = `UPDATE public.incident SET image_url = $1 WHERE incident_id = $2`;

    await db.query(text, [imageUrl, id]);
    return next();
  } catch (error) {
    return next({
      log: `controller.updateIncidentImage ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.updateIncidentImage. Check the server logs.',
      },
    });
  }
};

controller.updateIncidentDetails = async (req, res, next) => {
  console.log('req.body', req.body);
  try {
    const { id } = req.params; // for sql WHERE
    const { details } = req.body; // for sql SET
    const text = `UPDATE public.incident SET details = $1 WHERE incident_id = $2`;

    await db.query(text, [details, id]);
    return next();
  } catch (error) {
    return next({
      log: `controller.updateIncidentDetails ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.updateIncidentDetails. Check the server logs.',
      },
    });
  }
};

module.exports = controller;
