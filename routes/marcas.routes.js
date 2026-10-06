import express, { response } from 'express';
import marcasController from '../controllers/marcas.controller.js';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all', function(req, res, next) {
  const response = marcasController.mostrarMarcaTodas();
  res.status(response.status).json({
    data: response.data,
    message: response.message
  })
});

router.get('/una/:id', function(req, res, next) {
  const response = marcasController.mostrarMarcaUna(req.params.id);
  res.status(response.status).json({
    data: response.data,
    message: response.message
  })
});

router.post('/create', function(req, res, next) {
  const response = marcasController.agregarMarcas(req.body);
  res.status(response.status).json({
    data: response.data,
    message: response.message
  })
});

router.put('/update', function(req, res, next) {
  const response = marcasController.actualizarMarca(req.body, req.params.id);
  res.status(response.status).json({
    data: response.data,
    message: response.message
  })
});

router.delete('/dalete/:id', function(req, res, next) {
  const response = marcasController.eliminarMarca(req.params.id);
  res.status(response.status).json({
    data: response.data,
    message: response.message
  })
});



export default router;
