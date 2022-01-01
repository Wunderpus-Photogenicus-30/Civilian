const { Pool } = require('pg');

const PG_URI = 
  'postgres://vgrmebyf:S_1pEz4mslMJN_ie4x4YM8fnQOm2YdKv@kashin.db.elephantsql.com/vgrmebyf';

  const pool = new Pool({
    connectionString: PG_URI,
  });



  /* 
  this database table is called "user".

  It has 10 columns:
    id, (bigint) <-- PRIMARY KEY
    title, (varchar) 
    location, (varchar)
    video_url, (varchar)
    image_url, (varchar)
    username, (varchar)
    photo, (varchar)
    email, (varchar)
    details, (varchar)
    time (varchar)

  */  

  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };