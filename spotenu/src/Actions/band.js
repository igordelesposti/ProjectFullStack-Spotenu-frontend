import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseUrl = 'https://j9dqwopuf4.execute-api.us-east-1.amazonaws.com/dev/'

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
        `${baseUrl}band/getallbands`, {
            headers: {
                "authorization": accessToken
            }
        }
    )
    
    dispatch(getAllBands(response.data.allBands))
}

export const approveBand = (id) => async (dispatch) =>{
    const body = {

    }
    const accessToken = localStorage.getItem("accessToken") 
    
     await axios.post(
        `${baseUrl}band/approve/${id}`, body, {
            headers: {
                "Authorization": accessToken
            }
        }
    )
        alert("Banda aprovada com sucesso!")
        dispatch(push(routes.administratorScreen))
}