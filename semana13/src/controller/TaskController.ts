import { FastifyInstance } from "fastify";
import { taskService } from "../service/TaskService";

export async function taskController(app: FastifyInstance) {
    app.post("/task", (request, reply) => {
        const body = request.body as { text: string };

        try {
            taskService.create(body.text);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ erro: error.message })
        }
    })

    app.get("/task", (_, reply) => {
        const list = taskService.getAll();
        return reply.code(200).send(list);
    })

}