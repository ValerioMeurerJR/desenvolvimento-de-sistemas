import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { taskService } from "../service/TaskService";

export async function taskController(app: FastifyInstance) {
    app.post("/task", (request, reply) => {
        const body = request.body as { text: string };

        try {
            taskService.create(body.text);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ error: error.message })
        }
    })

    app.post("/task/list", (request, reply) => {
        const { body } = request as { body: any };
        body.map((task: any) => {
            try {
                taskService.create(task.text);
                return reply.code(201).send();
            } catch (error: any) {
                return reply.code(409).send({ error: error.message })
            }
        })
    })

    app.get("/task",async (_, reply) => {
        
        const list = await taskService.getAll();
        return reply.code(200).send(list);
    })

    app.get("/task/:id", (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const task = taskService.getById(id);
        return reply.code(200).send(task);
    })

    app.patch("/task/:id/completed", (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        try {
            const task = taskService.updateCompleted(id)
            return reply.code(200).send(task);
        } catch (error: any) {
            return reply.code(404).send({ error: error.message });
        }

    })

    app.patch("/task/:id/text", (request: FastifyRequest, reply: FastifyReply) => {
        // const { id } = request.params as { id: string };
        // const { text } = request.body as { text: string };
        const { params, body } = request as { params: any, body: any };
        try {
            const task = taskService.updateText(params.id, body.text)
            return reply.code(200).send(task);
        } catch (error: any) {
            return reply.code(404).send({ error: error.message });
        }
    })

    app.delete("/task/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string }
        await taskService.delete(id)
        return reply.code(200).send();
    })
}