export abstract class Country {
    abstract getNumberPopulation(): number
}

export class Chile extends Country {

    constructor(private numberOfPopulation: number) {
        super();
    }

    getNumberPopulation() {
        return this.numberOfPopulation
    }

}

export class Argentina extends Country {

    constructor(private numberOfPopulation: number) {
        super();
    }

    getNumberPopulation() {
        return this.numberOfPopulation
    }
}

export class Guatemala extends Country {

    constructor(private numberOfPopulation: number) {
        super();
    }

    getNumberPopulation() {
        return this.numberOfPopulation
    }
}

export class Venezuela extends Country {

    constructor(private numberOfPopulation: number) {
        super();
    }

    getNumberPopulation() {
        return this.numberOfPopulation
    }
}

export class Mexico extends Country {

    constructor(private numberOfPopulation: number) {
        super();
    }

    getNumberPopulation() {
        return this.numberOfPopulation
    }
}
