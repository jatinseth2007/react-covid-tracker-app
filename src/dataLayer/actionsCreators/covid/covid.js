export const covidSetDataByCountry = (covidDataByCountry) => {
    return (dispatch) => {
        try {
            // set covid data by country
            dispatch({
                type: "covid-set-data-by-country",
                payload: covidDataByCountry
            });
        } catch (error) {
            dispatch({
                type: "covid-set-data-by-country-error",
                payload: error
            });
        }
    }
}