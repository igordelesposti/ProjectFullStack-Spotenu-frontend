import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


export const getAllBands = (bands) => {
    return {
        type: 'GET_ALL_BANDS',
        payload: {
            bands
        }
    }
}


export const getBands = (accessToken) => async (dispatch) =>{
    const response = await axios.get(
        'http://localhost:3333/band/getallbands', {
            headers: {
                "authorization": accessToken
            }
        }
    )
    
    dispatch(getAllBands(response.data.allBands))
}