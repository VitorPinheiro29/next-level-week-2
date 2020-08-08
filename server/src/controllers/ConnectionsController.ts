import { Request, Response } from 'express';
import db from '../database/conection';

export default class ConnectionsControllers {
  async index(request: Request, response: Response) {
    const totalConnections = await db('connections').count('* as total'); //count é pra listar todos os registros e colocar em uma coluna "total"

    const { total } = totalConnections[0];

    return response.json({ total });
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await db('connections').insert({
      user_id,
    });

    return response.status(201).send();
  }
}
