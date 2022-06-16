import { Country, Chile, Argentina, Guatemala, Venezuela, Mexico } from './class-country';


(() => {

    const printPopulationCountries = (countries: Country[]) => {

        for (const country of countries) {

            if (country instanceof Chile) {
                console.log('Chile', country.getNumberPopulation())
                continue;
            }
            if (country instanceof Argentina) {
                console.log('Argentina', country.getNumberPopulation())
                continue;
            }
            if (country instanceof Guatemala) {
                console.log('Guatemala', country.getNumberPopulation())
                continue;
            }
            if (country instanceof Venezuela) {
                console.log('Venezuela', country.getNumberPopulation())
                continue;
            }
            if (country instanceof Mexico) {
                console.log('Mexico', country.getNumberPopulation())
                continue;
            }

        }
    }

    const countries = [
        new Chile(19),
        new Argentina(45),
        new Guatemala(16),
        new Venezuela(28),
        new Mexico(50)
    ];

    printPopulationCountries(countries);

})();