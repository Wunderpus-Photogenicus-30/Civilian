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
      details)
      VALUES (
      '${event.id}',
      '${event.title}',
      '${event.location}',
      '${event.video_url}', 
      '${event.image_url}', 
      '${event.username}', 
      '${event.photo}', 
      '${event.email}', 
      '${event.details}')
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


module.exports = controller;