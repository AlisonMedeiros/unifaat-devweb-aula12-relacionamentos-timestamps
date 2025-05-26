import { Router } from 'express';
import ListColaboradorController from '../app/Controllers/ColaboradoresApi/ListColaboradorController.js';
import InsertColaboradorController from '../app/Controllers/ColaboradoresApi/InsertColaboradorController.js';
import UpdateColaboradorController from '../app/Controllers/ColaboradoresApi/UpdateColaboradorController.js';
import GetColaboradorController from '../app/Controllers/ColaboradoresApi/GetColaboradorController.js';
import DeleteColaboradorController from '../app/Controllers/ColaboradoresApi/DeleteColaboradorController.js';

export default (function () {

    const router = Router();

    // GET Listar
    router.get('/api/colaboradores', ListColaboradorController);

    // GET Obter
    router.get('/api/colaboradores/:id', GetColaboradorController);

    // POST Inserir
    router.post('/api/colaboradores', InsertColaboradorController);

    // PUT Atualizar
    router.put('/api/colaboradores/:id', UpdateColaboradorController);

    // DELETE Excluir
    router.delete('/api/colaboradores/:id', DeleteColaboradorController);

    return router;

})();