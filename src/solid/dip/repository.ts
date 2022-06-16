import { LocalDB, QADB } from './db'

export interface User {
    id: number,
    name: string,
    job: string
}

export class UserService {
    private users: User[] = []

    constructor(private userProvider: QADB) { }

    async getUsers() {
        this.users = await this.userProvider.getUsers();

        return this.users;
    }
}