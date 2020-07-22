import axios from "axios"
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


export const createMusic = (accessToken, body) => async (dispatch) => {
    try {
         await axios.post(
            'http://localhost:3333/music/createmusic', body, {
            headers: { "authorization": accessToken }
        }
        )

        alert("Música criada com sucesso")
        dispatch(push(routes.bandScreen))

    } catch (err) {
        alert("Não é possível criar a música, tente novamente.")
    }
}