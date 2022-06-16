interface Car {
    move(): void
    radio(): void
}

interface CarGasoline {
    gasoline(): void
}

interface CarSmart {
    carDriver(): void
}

class Honda implements Car, CarGasoline {
    move() { }
    gasoline() { }
    radio() { }
}

class Hilux implements Car, CarGasoline {
    move() { }
    radio() { }
    gasoline() { }
    allTerrain() { }
}

class Tesla implements Car, CarSmart {
    move() { }
    radio() { }
    carDriver() { }
    allTerrain() { }
}