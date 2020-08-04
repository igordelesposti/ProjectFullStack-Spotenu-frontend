import axios from "axios"
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseUrl = 'https://j9dqwopuf4.execute-api.us-east-1.amazonaws.com/dev/'

export const createMusic = (accessToken, body) => async (dispatch) => {
    try {
         await axios.post(
            `${baseUrl}music/createmusic`, body, {
            headers: { "authorization": accessToken }
        }
        )

        alert("Música criada com sucesso")
        dispatch(push(routes.bandScreen))

    } catch (err) {
        alert("Não é possível criar a música, tente novamente.")
    }
}