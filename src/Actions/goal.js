import axios from 'axios';


const baseURL =" https://e21t4v19m6.execute-api.us-east-1.amazonaws.com/v1"

export const setGoals = (allGoals) => ({
    type: "SET_GOALS",
    payload: {
        allGoals
    }
})

export const getGoals = () => async(dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            Authorization: token
        }
    };
    try{
        const response = await axios.get(`${baseURL}/listGoals`, axiosHeader)
        dispatch(setGoals(response.data.goals));
       
    }catch(error) {
        window.alert("erro")
    }

}

export const createNewGoal = (goal) => async(dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            Authorization: token
        }
    }

    const newGoal = {
        goal
    }

    try{
        await axios.post(`${baseURL}/create/goal`,newGoal,axiosHeader)
        dispatch(getGoals())
    }catch(err){
        window.alert("Erro ao criar nova meta")
    }
}


export const deleteGoal = (idGoal) => async(dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            Authorization: token
        }
    }

    try{
        await axios.delete(`${baseURL}/goal/delete/${idGoal}`, axiosHeader)
        dispatch(getGoals())
    }catch(err){
        window.alert("Erro ao deletar meta")
    }
}

export const editGoal = (idGoal, newGoal) => async(dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            Authorization: token
        }
    }

    const goalEdited = {
        newGoal
    }

    try{
        await axios.post(`${baseURL}/goal/update/${idGoal}`,goalEdited, axiosHeader)
        dispatch(getGoals())
    }catch(err){
        window.alert("Erro ao editar meta")
    }
}