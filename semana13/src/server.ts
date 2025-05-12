import fastify from "fastify"
import { taskController } from "./controller/TaskController";
import cors from '@fastify/cors';

const app = fastify()

app.register(cors, { 
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
});

app.register(taskController)

app.listen({
    port: 3333
}).then(() => {
    console.log("Back-End rodando na porta 3333!")
})