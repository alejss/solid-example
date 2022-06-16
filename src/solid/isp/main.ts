interface Car {
    move(): void
    gasoline(): void
    radio(): void
    carDriver(): void
}

class Honda implements Car {
    move() { }
    gasoline() { }
    radio() { }
    carDriver() {
        throw new Error('Not available')
    }
}

class Hilux implements Car {
    move() { }
    gasoline() { }
    radio() { }
    carDriver() {
        throw new Error('Not available')
    }
    allTerrain() { }
}

class Tesla implements Car {
    move() { }
    gasoline() {
        throw new Error('Not available')
    }
    radio() { }
    carDriver() { }
    allTerrain() {
        throw new Error('Not available')
    }
}