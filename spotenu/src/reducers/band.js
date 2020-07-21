const initialState = {
    bands: []
}

const band = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_BANDS": {
            return { ...state, bands: action.payload.bands }
        }

        default:
            return state
    }
}

export default band;