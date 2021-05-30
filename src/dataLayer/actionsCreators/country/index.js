import { config } from '../../../config';

export const countriesFetchHistoricalData = (days, country = `all`) => {
    return async (dispatch) => {
        try {
            // set Loading ON...
            dispatch({
                type: "country-set-loading",
                payload: true,
            });
            // fetch the data for country...
            const enpoint = `${config.apiBaseUrl}historical/${country}?lastdays=${days}`;
            const rawData = await fetch(enpoint);
            const countryHData = await rawData.json();

            // set Data...
            dispatch({
                type: "country-set-historical-data",
                payload: ('timeline' in countryHData) ? countryHData.timeline : countryHData,
            });
        } catch (error) {
            // set error...
            dispatch({
                type: "country-set-error",
                payload: error,
            });
        }
    }
};