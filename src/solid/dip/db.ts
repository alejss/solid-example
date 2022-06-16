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

export class ProdDB implements UserProvider {
    async getUsers(): Promise<User[]>{
        const resp = await fetch('https://pokeapi.co/api/v2/type/3');
        return await resp.json();
    }
}