const initialState = {
    dataByCountry: {},
    dataByCountryError: false,
    dataByCountryErrorMessage: ``,
    loading: false,
    error: false,
    errorMessage: ``,
};

const reducer = (state = initialState, action) => {
    try {
        switch (action.type) {
            case "covid-set-data-by-country":
                return {
                    ...state,
                    dataByCountry: action.payload,
                    dataByCountryError: false,
                    dataByCountryErrorMessage: ``
                };
            case "covid-set-data-by-country-error":
                return {
                    ...state,
                    dataByCountryError: true,
                    dataByCountryErrorMessage: action.payload
                };
            default:
                return state;
        }
    } catch (error) {
        throw error;
    }
};

export default reducer;