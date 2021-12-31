const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// const apiRouter = require('./routes/api');

// Handels parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// handle requests for static files
app.use(express.static('./client'));

const HMTL_FILE = path.resolve(__dirname, '../client/index.html');

// route handler to respond with main app
app.get('/', (req, res) => {
  res
    .status(200)
    .contentType('text/html')
    .sendFile(HTML_FILE, (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
});

// defining route handlers


// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);

  const errorStatuscode = errorObj.status || 500;

  return res.status(errorStatusCode).json(errorObj.message);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
