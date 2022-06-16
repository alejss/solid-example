import { UserService } from "./repository"
import { ProdDB } from './db'

(async () => {

    const userProvider = new ProdDB()
    const userService = new UserService(userProvider);
    const users = await userService.getUsers();

    console.log({ users });
})()