import { Router } from 'express';
import InsertColaboradorProjetoController from '../app/Controllers/ColaboradoresProjetosApi/InsertColaboradorProjetoController.js';
import DeleteColaboradorProjetoController from '../app/Controllers/ColaboradoresProjetosApi/DeleteColaboradorProjetoController.js';

export default (function () {

    const router = Router();

    // POST inserir relacionamento
    router.post('/api/colaboradores-projetos', InsertColaboradorProjetoController);

    // DELETE excluir relacionamento
    router.delete('/api/colaboradores-projetos/:id_colaborador/:id_projeto', DeleteColaboradorProjetoController);

    return router;

})();