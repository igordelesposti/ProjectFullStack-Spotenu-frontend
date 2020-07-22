const initialState = {
    genres: []
}

const genre = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ALL_GENRES": {
            return { ...state, genres: action.payload.genres }
        }

        default:
            return state
    }
}

export default genre;