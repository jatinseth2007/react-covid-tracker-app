import { config } from '../../../config';
import { prepareCountriesData } from '../../../helper/countries';

export const countriesFetch = (covidAC = null) => {
    return async (dispatch) => {
        try {
            //set loading ON
            dispatch({
                type: "counties-set-loading",
                payload: true
            });
            const { apiBaseUrl } = config;
            const completeUrl = `${apiBaseUrl}countries`;
            // send request and fetch the data...
            const rawData = await fetch(completeUrl);
            const countriesData = await rawData.json();
            const { countryData, covidDataByCountry } = prepareCountriesData(countriesData);
            dispatch({
                type: "counties-fetch",
                payload: countryData
            });
            // dispatch the covid action
            if (covidAC)
                covidAC(covidDataByCountry);
        } catch (error) {
            dispatch({
                type: "counties-set-error",
                payload: error
            });
        }
    }
};

export const countriesSelectCountry = (country) => {
    return (dispatch) => {
        try {
            //set selected country value...
            dispatch({
                type: "counties-set-selected-country",
                payload: country
            });
        } catch (error) {
            throw error;
        }
    }
};
