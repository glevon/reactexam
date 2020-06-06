import React, { Component } from 'react'
import {connect} from "react-redux"
import changeData from "../store/AddQuestions/action"

class AddQuestions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question:"",
            id:"",
            category:"",
            answers:[],
        }
    }
    
    change(e){
        this.state[e.target.getAttribute("data-id")]=e.target.value
        this.setState({});
    }
    save(){
        let questions=this.props.addQuestion.questions
        questions.push(this.state);
        this.props.changeData("addQuestion",questions)
    }
    render() {
        return (
            <div className="w-25">
                Question:<textarea data-id="question" onChange={this.change.bind(this)} value={this.propsquestion} className="form-control"  rows="3"></textarea>
                id:<input data-id="id" onChange={this.change.bind(this)} value={this.props.id} type="text" className="form-control" />
                Category:<input data-id="category"  onChange={this.change.bind(this)} value={this.props.category} type="text"  className="form-control" />
                <button onClick={this.save.bind(this)}   className="btn btn-primary" >Add Question</button>
            </div>
        )
    }
}

function mapstatetoprops(state) {
    return{
        addQuestion:state.AddQuestionsReduser,
        topquestion:state.TopQuestionsReducer
    }
    
}
function mapdispatchtoprops() {
    return{
        changeData,
    }  
}
export default connect(mapstatetoprops,mapdispatchtoprops())(AddQuestions)
