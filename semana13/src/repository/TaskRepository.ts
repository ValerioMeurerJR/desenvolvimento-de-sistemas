
// import { Task } from "@prisma/client";
// import { prisma } from "../prisma/client"

// export class TaskRepository {
//     async save(task: Task) {
//         await prisma.task.create({
//             data: task,
//         });
//     }

import { Task } from "../entity/Task";
import { prisma } from "../prisma/client"

export class TaskRepository {
    async save(task: Task) {
        await prisma.task.create({
            data: {
                id: task.getId(),
                text: task.getText(),
                completed: task.getCompleted(),
                createdAt: task.getCreatedAt(),
                updatedAt: task.getUpdatedAt(),
            },
        });
    }

    async findAll() {
        const tasks = await prisma.task.findMany()
        return tasks
    }

    async getById(id: string) {
        const task = await prisma.task.findUnique({
            where: { id },
        });

        if (!task) {
            // throw new Error(`Tarefa com ID ${id} não encontrada`);
        }

        return task;
    }
    async getByText(text: string) {
        const task = await prisma.task.findMany({
            where: { text },
        });

        if (!task) {
            // throw new Error(`Tarefa com text ${text} não encontrada`);
        }

        return task;
    }

    async updateCompleted(id: string, completed: boolean) {
        await prisma.task.update({
            where: { id },
            data: {
                completed
            },
        })
    }
    async deleteById(id: string) {
        await prisma.task.delete({
            where: { id }
        })
    }

}