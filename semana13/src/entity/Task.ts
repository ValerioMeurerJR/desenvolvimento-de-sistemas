import { randomUUID } from 'crypto';

export class Task {
    private id: string;
    private text: string;
    private completed: boolean;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(text: string) {
        this.id = randomUUID();
        this.text = text;
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    public getId() {
        return this.id;
    }

    public getText() {
        return this.text;
    }

    public setCompleted(completed: boolean): void {
        this.completed = completed;
        this.updatedAt = new Date();
    }

    public setText(text: string): void {
        this.text = text;
        this.updatedAt = new Date();
    }
    
    public getCompleted() {
        return this.completed;
    }

    public getCreatedAt() {
        return this.createdAt;
    }

    public getUpdatedAt() {
        return this.updatedAt;
    }
}