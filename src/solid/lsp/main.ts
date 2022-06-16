import { Chile, Argentina, Guatemala, Venezuela } from './class-country';


(() => {

    const printPopulationCountries = (countries: (Chile | Argentina | Guatemala | Venezuela)[]) => {

        for (const country of countries) {

            if (country instanceof Chile) {
                console.log('Chile', country.getNumberOfChilePopulation())
                continue;
            }
            if (country instanceof Argentina) {
                console.log('Argentina', country.getNumberOfArgentinaPopulation())
                continue;
            }
            if (country instanceof Guatemala) {
                console.log('Guatemala', country.getNumberOfGuatemalaPopulation())
                continue;
            }
            if (country instanceof Venezuela) {
                console.log('Venezuela', country.getNumberOfVenezuelaPopulation())
                continue;
            }

        }
    }

    const countries = [
        new Chile(19),
        new Argentina(45),
        new Guatemala(16),
        new Venezuela(28),
    ];

    printPopulationCountries(countries);

})();