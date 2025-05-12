import { Task } from "../entity/Task";
import { TaskRepository } from "../repository/TaskRepository";

class TaskService {
    private taskRepository = new TaskRepository()
    private taskList: Task[] = [];

    public async create(text: string): Promise<void> {
        const textAlreadyExist = await this.taskRepository.getByText(text)
        if (textAlreadyExist.length) {
            // throw new Error("Já existe uma tarefa com esse texto.")
            return
        }
        const newTask = new Task(text);
        this.taskRepository.save(newTask);
    }

    public async getAll() {
        return await this.taskRepository.findAll();
    }

    public getById(id: string): Task | null {
        const task = this.taskList.find(value => value.getId() === id)
        return task ? task : null
    }

    public async updateCompleted(id: string) {
        const task = await this.taskRepository.getById(id);
        if (!task) {
            return null;
        }
        const completed = !task.completed;
        await this.taskRepository.updateCompleted(id, completed);
        const updatedTask = await this.taskRepository.getById(id);
        return updatedTask;
    }

    public updateText(id: string, text: string): Task | null {
        const task = this.getById(id)
        if (task === null) {
            throw new Error("Tarefa não foi encontrada.")
        }
        task.setText(text)
        return task
    }

    public async delete(id: string) {
        this.taskRepository.deleteById(id)
    }

}

export const taskService = new TaskService();
