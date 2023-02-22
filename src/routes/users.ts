import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'

export async function usersRoutes(app: FastifyInstance) {

    app.get('/', async () => {
        const users = await knex('users').select()
    
        return { users }
      })
    
    app.post('/', async (request, reply) => {
      const createUserBodySchema = z.object({
        first_name: z.string(),
        username: z.string(),
        password: z.string(),
      })
  
      const { first_name, username, password } = createUserBodySchema.parse(
        request.body,
      )
  
  
      await knex('users').insert({
        id: randomUUID(),
        first_name,
        username,
        password,
      })
  
      return reply.status(201).send()
    })
  }