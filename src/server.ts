import fastify from "fastify";
import { env } from './env'
import { knex } from "./database";
import { usersRoutes } from "./routes/users";

const app = fastify()

app.register(usersRoutes, {
    prefix: 'users',
  })

app
    .listen({
    port: env.PORT,
}).then(() => {
    console.log('HTTP Server Running!')
})