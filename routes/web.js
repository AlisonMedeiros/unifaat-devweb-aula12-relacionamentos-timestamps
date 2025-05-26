import { Router } from 'express';
import express from 'express';
import path from 'path';

import ListPublicFilesController from '../app/Controllers/ListPublicFilesController.js';
import colaboradoresApi from './colaboradoresApi.js';
import todosApi from './todosApi.js';
import colaboradoresProjetosApi from './colaboradoresProjetosApi.js';
import projetosApi from './projetosApi.js';
import DateController from '../app/Controllers/DateController.js';

export default (function () {

    const router = Router();

    /** Usado para servir json */
    router.use(express.json());

    /** Servir o public estaticamente, tanto para arquivos como para os assets de frontend */
    // NÃO SERÁ CHAMADO CASO TENHA A CAMADA DE NGINX COM ARQUIVOS ESTÁTICOS
    router.use(express.static(path.join(CONSTANTS.DIR, 'public')));

    // Rota para listar arquivos na pasta 'public'
    // NÃO SERÁ CHAMADO CASO TENHA A CAMADA DE NGINX COM ARQUIVOS ESTÁTICOS
    router.get('/', ListPublicFilesController);

    /******** ROTAS DE APIS */

    // Colaborador api routes
    router.use('/', colaboradoresApi);

    // Todos api routes
    router.use('/', todosApi);

    // Projetos api routes
    router.use('/', projetosApi);

    // Colaborador-Projeto api routes
    router.use('/', colaboradoresProjetosApi);

    //Dates

    router.get('/date', DateController);

    /********************* */

    router.get('/env', (request, response) => {
        return response.status(CONSTANTS.HTTP.SUCCESS).json({
            env: process.env,
            CONSTANTS: globalThis.CONSTANTS
        })
    });

    /** Se nenhuma rota for encontrada, 404 neles! */
    router.use((request, response) => {
        response.status(CONSTANTS.HTTP.NOT_FOUND).json({ error: "Not found" });
    });

    return router;

})();
