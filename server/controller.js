const db = require('./database');

const controller = {};

controller.get = async (req, res, next) => {
  try {
    const queryString = `SELECT * from public.user`;

    const result = await db.query(queryString);
    const data = result.rows;
    res.locals.all = data;
    return next();

  } catch (error) {
    return next({
      log: `controller.get ERROR`,
      message: {
        err: 'Error occurred in controller.get. Check the server logs.',
      },
    });
  }
}


controller.newEvent = async (req, res, next) => {
  try {
  const { id, title, location, video_url, image_url, username, photo, email, details, time } = req.body;

  const params = [ id, title, location, video_url, image_url, username, photo, email, details, time ];

  const text = `
    INSERT INTO public.user (id, title, location, username, photo, email, details, time)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *
    `;

  const result = await db.query(text, params);
  res.locals.allEvents = result;
  
  } catch (error) {
    return next({
      log: `controller.newEvent ERROR found`,
      status: 500,
      message: {err: 'Error occurred in controller.newEvent. Check the server logs.'},
    });
  }
}


/* Tried to write it this way and it wasn't working
controller.newEvent = async (req, res, next) => {
  try {
    let event = req.body;

    const queryString = `INSERT INTO public.user (
      id,
      title,
      location,
      video_url, 
      image_url, 
      username, 
      photo, 
      email, 
      details,
      time)
      VALUES (
      '${event.id}',
      '${event.title}',
      '${event.location}',
      '${event.video_url}', 
      '${event.image_url}', 
      '${event.username}', 
      '${event.photo}', 
      '${event.email}', 
      '${event.details}',
      '${event.time}')
    RETURNING *`;

    const result = await db.query(queryString);
    res.locals.newEvent = result;
    return next();

  } catch (error) {
    return next({
      log: `controller.newEvent ERROR found`,
      message: {
        err: 'Error occurred in controller.newEvent. Check the server logs.',
      },
    });
  }
}
*/

module.exports = controller;