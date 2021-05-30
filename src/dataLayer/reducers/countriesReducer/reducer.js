const initialState = {
    selectedCountry: { name: '', code: '' },
    allCountries: [],
    loading: false,
    error: false,
    errorMessage: ``
};

const reducer = (state = initialState, action) => {
    try {
        switch (action.type) {
            case "counties-set-loading":
                return {
                    ...state,
                    loading: action.payload
                };
            case "counties-fetch":
                return {
                    ...state,
                    allCountries: action.payload,
                    loading: false,
                    error: false,
                    errorMessage: ``,
                };
            case "counties-set-error":
                return {
                    ...state,
                    loading: false,
                    error: true,
                    errorMessage: action.payload,
                }
            case "counties-set-selected-country":
                return {
                    ...state,
                    selectedCountry: {
                        ...state.selectedCountry,
                        name: action.payload.name,
                        code: action.payload.code,
                    }
                };
            default:
                return state;
        }
    } catch (error) {
        throw error;
    }
};

export default reducer;