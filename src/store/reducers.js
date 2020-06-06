import TopQuestionsReduser from "./TopQuestions/reducer"
import AddQuestionsReduser from "./AddQuestions/reducer"
import {combineReducers} from 'redux'

export default combineReducers({
    TopQuestionsReduser,
    AddQuestionsReduser,
})