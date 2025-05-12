import fastify from "fastify"
import { Task } from "./entity/Task";
import { error } from "console";
import { taskController } from "./controller/TaskController";

const app = fastify()

app.register(taskController)

app.listen({
    port: 3333
}).then(() => {
    console.log("Back-End rodando na porta 3333!")
})