import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


export const setAllGenres = (genres) => {
    return {
        type: 'SET_ALL_GENRES',
        payload: {
            genres
        }
    }
}

export const getGenres = (accessToken) => async (dispatch) =>{
    const response = await axios.get(
        'http://localhost:3333/genre/getallgenres', {
            headers: {
                "authorization": accessToken
            }
        }
    )   
    
    dispatch(setAllGenres(response.data.result))
}

export const createGenrer = (accessToken, body) => async (dispatch) => {
    try {
         await axios.post(
            'http://localhost:3333/genre/addgenre', body, {
            headers: { "authorization": accessToken }
        }
        )
        alert("Gênero criado com sucesso")
        dispatch(push(routes.administratorScreen))

    } catch (err) {
        alert("Não é possível criar o gênero, tente novamente")
    }
}


