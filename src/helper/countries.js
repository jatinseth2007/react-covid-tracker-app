export const sortCountries = (rawInput = [], keyToSort = `totalCases`) => {
    try {
        let output = [...rawInput];
        // if input values are there
        if (Array.isArray(output) && output.length > 0) {
            // sort the array...
            output.sort((a, b) => b[keyToSort] - a[keyToSort]);
        }//EOI
        return output;
    } catch (error) {
        throw error;
    }
};

export const prepareCountriesData = (rawCountriesData) => {
    try {
        let output = {
            countryData: [],
            covidDataByCountry: {}
        };
        // check if raw data is valid array and have data
        if (rawCountriesData && Array.isArray(rawCountriesData) && rawCountriesData.length > 0) {
            // run loop through it...
            for (const country of rawCountriesData) {
                const { country: name, countryInfo, cases = 0 } = country;
                //check if required data is there
                if (name && countryInfo?.iso2) {
                    //preprae the proper object...
                    const countryData = {
                        name,
                        code: countryInfo.iso2,
                        iso3: countryInfo?.iso3,
                        flag: countryInfo?.flag,
                        lat: countryInfo?.lat,
                        long: countryInfo?.long,
                        _id: countryInfo?._id,
                        totalCases: cases
                    };

                    output.countryData.push(countryData);
                    output.covidDataByCountry[countryInfo.iso2] = country;
                }//EOI
            }//EOL
        }//EOI
        return output;
    } catch (error) {
        throw error;
    }
};

export const searchCountryByname = (searchText = ``, countries = []) => {
    try {
        let output = [];
        if (searchText.length <= 0) return countries;
        // search text is not empty, we need to filter the countries...
        for (const country of countries) {
            //check if text is matching with name
            if (country.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
                output.push(country);
            }//EOI
        }//EOL
        return output;
    } catch (error) {
        throw error;
    }
};