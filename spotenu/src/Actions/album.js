import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseUrl = 'https://j9dqwopuf4.execute-api.us-east-1.amazonaws.com/dev/'

export const setAllAbunsByUser = (albuns) => {
    return {
        type: 'SET_ALL_ALBUNS_BY_USER',
        payload: {
            albuns
        }
    }
}


export const getAlbumByUser = (accessToken) => async (dispatch) =>{
    const response = await axios.get(
        `${baseUrl}album/getalbunsbyuser`, {
            headers: {
                "authorization": accessToken
            }
        }
    )

    
    dispatch(setAllAbunsByUser(response.data.albuns))
}


export const createAlbum = (accessToken, body) => async (dispatch) => {
    
    try {
         await axios.post(
            `${baseUrl}album/create`, body, {
            headers: { "authorization": accessToken }
        }
        )

        alert("Álbum criado com sucesso")
        dispatch(push(routes.bandScreen))

    } catch (err) {
        alert("Não é possível criar o álbum, tente novamente")
    }
}

