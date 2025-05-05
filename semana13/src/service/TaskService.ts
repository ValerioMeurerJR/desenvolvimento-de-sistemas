import { Task } from "../entity/Task";

class TaskService {

    private taskList: Task[] = [];

    public create(text: string): void {
        const textAlreadyExist = this.taskList.find(task => task.getText() === text);
        if (textAlreadyExist) {
            throw new Error("Já existe uma tarefa com esse texto.")
        }

        const newTask = new Task(text);
        this.taskList.push(newTask);
    }


    public getAll(): Task[] {
        return this.taskList;
    }
}

export const taskService = new TaskService();
