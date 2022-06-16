import { UserService } from "./repository"

(async () => {
    const userService = new UserService();
    const users = await userService.getUsers();

    console.log({ users });
})()