let globalState ={
        questions:[],
}

export  default function AddQuestionsReduser(state=globalState,action) {
    switch(action.type){
        case "addQuestion":return{
            ...state,
            questions:action.value
        }
        case "saveanswer":return{
            questions:action.value
        }
        case "inclike":return{
            questions:action.value
        }
    }
    return state
}

