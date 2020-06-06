let gState ={
    id:""
}

export  default function TopQuestionsReduser(state=gState,action) {
    switch(action.type){
        case "saveid":return{
            id:action.value
        }
        
    }
    return state
}

