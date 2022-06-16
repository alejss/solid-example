import { UserService } from "./repository"
import { QADB } from './db'

(async () => {

    const userProvider = new QADB()
    const userService = new UserService(userProvider);
    const users = await userService.getUsers();

    console.log({ users });
})()