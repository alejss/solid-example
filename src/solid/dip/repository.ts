import { LocalDB } from './db'

export interface User {
    id: number,
    name: string,
    job: string
}

export class UserService {
    private users: User[] = []

    constructor() { }

    async getUsers() {
        const db = new LocalDB();
        this.users = await db.getUsers();

        return this.users;
    }
}