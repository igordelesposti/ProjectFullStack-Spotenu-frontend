import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseUrl = 'https://j9dqwopuf4.execute-api.us-east-1.amazonaws.com/dev/'

export const setUserById = (users) => {
    return {
        type: 'SET_USER_BY_ID',
        payload: {
            users
        }
    }
}

export const getUserById = (accessToken) => async (dispatch) => {
    const response = await axios.get(
        `${baseUrl}user/getuserbyid`, {
            headers: {
                "authorization": accessToken
            }
        }
    )
        
    dispatch(setUserById(response.data.result))
}
export const login = (body) => async (dispatch) =>{
        try{
        const response = await axios.post(`${baseUrl}user/login`, body)
        
        
        localStorage.setItem("accessToken", response.data.accessToken.accessToken)

        dispatch(push(routes.bandScreen))


    }catch(err){
        alert(err)
    }
}
export const signUpListener = (body) => async(dispatch) =>  {
    try{
        const response = await axios.post(`${baseUrl}user/signup`, body)

        alert("Usuário cadastrado com sucesso")

        localStorage.setItem("accessToken", response.data.accessToken.accessToken)
        dispatch(push(routes.bandScreen))
    }catch(err){
        alert(err)
    }
}

export const signUpAdministrator = (body) => async (dispatch) => {
    try{
        const response = await axios.post(`${baseUrl}user/signupadministrator`,body)

        alert("Usuário administrador criado com sucesso")

        localStorage.setItem("accessToken", response.data.accessToken.accessToken)

        dispatch(push(routes.administratorScreen))
    }catch(err){
        alert(err)
    }
}

export const signUpBand = (body) => async (dispatch)=>{
    try{    
        const response = await axios.post(`${baseUrl}user/signupband`,body)
        
        
        alert("Usuário Banda criado com sucesso")
        
        localStorage.setItem("acessToken", response.data.accessToken.accessToken)

        dispatch(push(routes.bandScreen))
    }catch(err){
        alert(err)
    }
}