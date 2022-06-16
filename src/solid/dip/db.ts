import QAData from './data/db-prod.json'
export class LocalDB {
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

export class QADB {
    async getUsers() {
        return QAData
    }
}