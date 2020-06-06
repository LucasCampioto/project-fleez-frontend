const initialState = {
    allGoals: [],
}

const goalsReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_GOALS":
            const goalsList = action.payload.allGoals;
            return { ...state, allGoals: goalsList}

        default:
            return state
    }
}

export default goalsReducer