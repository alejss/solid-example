import { Country, Chile, Argentina, Guatemala, Venezuela, Mexico, Honduras } from './class-country';


(() => {

    const printPopulationCountries = (countries: Country[]) => {

        countries.forEach(country => {
            console.log(country.constructor.name , country.getNumberPopulation())
        });
    }

    const countries = [
        new Chile(19),
        new Argentina(45),
        new Guatemala(16),
        new Venezuela(28),
        new Mexico(50),
        new Honduras(3)
    ];

    printPopulationCountries(countries);

})();