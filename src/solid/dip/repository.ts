import { UserProvider } from './db'
import User from './user-interface'

export class UserService {
    private users: User[] = []

    constructor(private userProvider: UserProvider) { }

    async getUsers() {
        this.users = await this.userProvider.getUsers();

        return this.users;
    }
}