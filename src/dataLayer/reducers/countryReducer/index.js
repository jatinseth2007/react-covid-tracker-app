const initialState = {
    countryHistoricalData: {},
    loading: false,
    error: false,
    errorMessage: ``,
    days: 90,
};

const reducer = (state = initialState, action) => {
    try {
        switch (action.type) {
            case "country-set-error":
                return {
                    ...state,
                    loading: false,
                    error: true,
                    errorMessage: action.payload
                };
            case "country-set-loading":
                return {
                    ...state,
                    loading: action.payload
                };
            case "country-set-historical-data":
                return {
                    ...state,
                    loading: false,
                    error: false,
                    errorMessage: ``,
                    countryHistoricalData: action.payload
                };
            default:
                return state;
        }
    } catch (error) {
        throw error;
    }
};

export default reducer;