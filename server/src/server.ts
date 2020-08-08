import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

/**
 * MÉTODOS HTTP
 *
 * - GET: buscar ou listar informações
 * - POST: Criar alguma nova informação
 * - PUT: Atualizar uma informação existente
 * - Delete: Deletar informações
 * |||||||||||||||||||||||||||||||||||||||||||
 *
 * PARÂMETROS
 *
 * Corpo (Request Body): Dados para criação ou atualização de um registro.
 * é o que o usuário digita no input, por exemplo
 *
 * Routes Params: Identificar qual recurso que quero atualizar ou deletar/ exemplo: "/:id"
 *
 * Query Params: Paginação, filtros, ordenações. Acessa por req.params.
 */

app.listen(3333);
