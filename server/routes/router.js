const express = require('express');
const router = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

// raiz del router
router.get('/', services.homeRoutes);

// nuevo anuncio
router.get('/newAd', services.newAd)

// actualizar anuncio
router.get('/update-ad', services.update_ad)

// Rutas API
router.post('/api/ads', controller.create);
router.get('/api/ads', controller.find);
router.put('/api/ads/:id', controller.update);
router.delete('/api/ads/:id', controller.delete);

module.exports = router