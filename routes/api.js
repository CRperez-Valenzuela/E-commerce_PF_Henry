var express = require('express');
var router = express.Router();
var pool = require('../db');


router.get('/users', async function(req, res, next) {
    try {
      const result = await pool.query('SELECT * FROM users');
      console.log(result.rows);
      res.json(result.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Error en el servidor');
    }
  });


router.get('/shoes', async function(req, res, next) {
  try {
    const result = await pool.query('SELECT * FROM shoes');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
});


router.get('/sizes', async function(req, res, next) {
  try {
    const result = await pool.query('SELECT * FROM sizes');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
});


router.get('/shoesizes', async function(req, res, next) {
  try {
    const result = await pool.query('SELECT * FROM shoesizes');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
});

router.get('/test-db', async function(req, res, next) {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;