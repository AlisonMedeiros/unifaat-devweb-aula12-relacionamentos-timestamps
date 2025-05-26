import { Router } from 'express';
import ListTodoController from '../app/Controllers/TodosApi/ListTodoController.js';
import InsertTodoController from '../app/Controllers/TodosApi/InsertTodoController.js';
import UpdateTodoController from '../app/Controllers/TodosApi/UpdateTodoController.js';
import GetTodoController from '../app/Controllers/TodosApi/GetTodoController.js';
import DeleteTodoController from '../app/Controllers/TodosApi/DeleteTodoController.js';

export default (function () {

    const router = Router();

    // GET Listar
    router.get('/api/todos', ListTodoController);

    // GET Obter 1
    router.get('/api/todos/:id', GetTodoController);

    // POST Inserir
    router.post('/api/todos', InsertTodoController);

    // PUT Atualizar
    router.put('/api/todos/:id', UpdateTodoController);

    // Delete Excluir
    router.delete('/api/todos/:id', DeleteTodoController);

    return router;

})();