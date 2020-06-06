import axios from 'axios';
import  { push } from 'connected-react-router'
import { routes } from '../containers/Router';

const baseURL ="https://e21t4v19m6.execute-api.us-east-1.amazonaws.com/v1"


export const newSignup = (name,email,password,photo) => async(dispatch) => {

    const signupInformation = {
        name,
        email,
        password,
        photo,
    }

    try{
       await axios.post(`${baseURL}/singup`, signupInformation)    
    }catch(err){
        window.alert("Erro ao se cadastrar")
    }
}

export const loginUser = (email,password) => async(dispatch)=>{
    const loginInformation = {
        email,
        password
    }
    try{
        const response = await axios.post(`${baseURL}/login`, loginInformation)
        window.localStorage.setItem("token", response.data.token);
        dispatch(push(routes.goals))    
    }catch(err){
        window.alert("Usuário ou senha inválidos")
    }
}