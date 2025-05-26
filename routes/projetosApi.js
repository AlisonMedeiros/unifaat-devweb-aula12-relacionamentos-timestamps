import { Router } from 'express';
import ListProjetoController from '../app/Controllers/ProjetosApi/ListProjetoController.js';
import GetProjetoController from '../app/Controllers/ProjetosApi/GetProjetoController.js';
import InsertProjetoController from '../app/Controllers/ProjetosApi/InsertProjetoController.js';
import UpdateProjetoController from '../app/Controllers/ProjetosApi/UpdateProjetoController.js';
import DeleteProjetoController from '../app/Controllers/ProjetosApi/DeleteProjetoController.js';

export default (function () {

    const router = Router();

    // GET Listar
    router.get('/api/projetos', ListProjetoController);

    // GET Obter
    router.get('/api/projetos/:id', GetProjetoController);

    // POST Inserir
    router.post('/api/projetos', InsertProjetoController);

    // PUT Atualizar
    router.put('/api/projetos/:id', UpdateProjetoController);

    // DELETE Excluir
    router.delete('/api/projetos/:id', DeleteProjetoController);

    return router;

})();