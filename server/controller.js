const db = require('./database');

const controller = {};

controller.get = async (req, res, next) => {
  try {
    // SQL command string
    const queryString = `SELECT * from public.user`;

    // db query function to get info from our database
    const result = await db.query(queryString);

    // db.query will return a giant nested object. We just need the data in the rows key
    const data = result.rows;

    // store data in res.locals.all to pass to api router
    res.locals.allInfo = data;
    return next();
  } catch (error) {
    return next({
      log: `controller.get ERROR`,
      message: {
        err: 'Error occurred in controller.get. Check the server logs.',
      },
    });
  }
};


controller.postEvent = async (req, res, next) => {
  try {
    const {
      id,
      title,
      location,
      video_url,
      image_url,
      username,
      photo,
      email,
      details,
      time,
    } = req.body; // object destructuring the req.body to pass in to params
    const params = [ // params will be passed to db query, to insert the data object to the sql db
      id,
      title,
      location,
      video_url,
      image_url,
      username,
      photo,
      email,
      details,
      time,
    ];

    // SQL command to insert values into the following table(public.user) columns
    const text = `
      INSERT INTO public.user (id, title, location, video_url, image_url, username, photo, email, details, time)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
      `;

    
    // our async function passing in the SQL command string 'text' and our params data
    const result = await db.query(text, params);

    // store the evaluated query result into res.locals.allEvents to pass to api router
    res.locals.allEvents = result.rows[0];
    return next();
  } catch (error) {
    return next({
      log: `controller.newEvent ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.newEvent. Check the server logs.',
      },
    });
  }
};

module.exports = controller;
