import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const createGenrer = (accessToken, body) => async (dispatch) => {
    try {
        const response = await axios.post(
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