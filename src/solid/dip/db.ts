import QAData from './data/db-prod.json'
import User from './user-interface'
export abstract class UserProvider {
    abstract getUsers(): Promise<User[]>
}
export class LocalDB implements UserProvider{
    async getUsers() {
        return [
            {
                "id": 1,
                "name": "Aarón",
                "job": "Dev"
            },
            {
                "id": 2,
                "name": "Pablo",
                "job": "QA"
            },
            {
                "id": 3,
                "name": "Enrique",
                "job": "UX"
            }
        ]
    }
}

export class QADB implements UserProvider{
    async getUsers() {
        return QAData
    }
}