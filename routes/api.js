var express = require('express');
var router = express.Router();
var shoesController = require('../controllers/product/shoeController');
var sizesController = require('../controllers/product/sizeController');
var usersController = require('../controllers/product/userController');
var passport = require('../config/passport'); // Asegúrate de importar la configuración de Passport
var { User, Shoe, Size, ShoeSizes, sequelize } = require('../models'); // Importa los modelos configurados con Sequelize

// Obtener todas las zapatillas
router.get('/shoes', shoesController.getAllShoes);
router.get('/shoes/id/:id', shoesController.getShoeById);
router.post('/shoes', shoesController.createShoe);
router.put('/shoes/:id', shoesController.updateShoe);
router.delete('/shoes/:id', shoesController.deleteShoe);
router.get('/shoes/filter', shoesController.filterShoes);
router.get('/shoes/:id/sizes', shoesController.getShoeSizes);

// Obtener todas las tallas
router.get('/sizes', sizesController.getAllSizes);
router.get('/sizes/:id', sizesController.getSizeById);
router.post('/sizes', sizesController.createSize);
router.put('/sizes/:id', sizesController.updateSize);
router.delete('/sizes/:id', sizesController.deleteSize);

// Obtener todos los usuarios
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);

// Ruta para obtener todas las relaciones entre zapatillas y tallas
router.get('/shoesizes', async function(req, res, next) {
  try {
    const shoesizes = await ShoeSizes.findAll();
    res.json(shoesizes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
});

// Rutas de autenticación con Google
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  // Autenticación exitosa, redirigir al home
  res.redirect('/');
});

/* Rutas de autenticación con Facebook
router.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['email']
}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
  // Autenticación exitosa, redirigir al home
  res.redirect('/');
});

// Rutas de autenticación con GitHub
router.get('/auth/github', passport.authenticate('github', {
  scope: ['user:email']
}));

router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
  // Autenticación exitosa, redirigir al home
  res.redirect('/');
});*/

// Ruta para cerrar sesión
router.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
