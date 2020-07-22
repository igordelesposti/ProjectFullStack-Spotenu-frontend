const initialState = {
    albuns: []
}

const album = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ALL_ALBUNS_BY_USER": {
            return { ...state, albuns: action.payload.albuns }
        }

        default:
            return state
    }
}

export default album;