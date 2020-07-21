import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


export const login = (body) => async (dispatch) =>{
        try{
        const response = await axios.post('http://localhost:3333/user/login', body)
        
        
        localStorage.setItem("accessToken", response.data.accessToken.accessToken)

        dispatch(push(routes.bandScreen))


    }catch(err){
        alert(err)
    }
}
export const signUpListener = (body) => async(dispatch) =>  {
    try{
        const response = await axios.post('http://localhost:3333/user/signup', body)

        alert("Usuário cadastrado com sucesso")

        localStorage.setItem("accessToken", response.data.accessToken.accessToken)
        dispatch(push(routes.bandScreen))
    }catch(err){
        alert(err)
    }
}

export const signUpAdministrator = (body) => async (dispatch) => {
    try{
        const response = await axios.post('http://localhost:3333/user/signupadministrator',body)

        alert("Usuário administrador criado com sucesso")

        localStorage.setItem("accessToken", response.data.accessToken.accessToken)

        dispatch(push(routes.administratorScreen))
    }catch(err){
        alert(err)
    }
}

export const signUpBand = (body) => async (dispatch)=>{
    try{    
        const response = await axios.post('http://localhost:3333/user/signupband',body)
        
        
        alert("Usuário Banda criado com sucesso")
        
        localStorage.setItem("acessToken", response.data.accessToken.accessToken)

        dispatch(push(routes.bandScreen))
    }catch(err){
        alert(err)
    }
}