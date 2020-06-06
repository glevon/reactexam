import React, { Component } from 'react'
import {connect} from "react-redux"
import changeData from "../store/AddQuestions/action"


class Question extends Component {
    constructor(props) {
        super(props)
        this.ques=Object(this.props.addQuestion.questions.find(x => x.id === this.props.topquestions.id))
        console.log(this.ques.answers);
        
        this.qid=this.props.topquestions.id
        this.state = {
            id:"",
            answer:"",
            likes:0,
            
       }
    }
    change(e){
        this.state[e.target.getAttribute("data-id")]=e.target.value
        this.setState({});
    }
    save(){
        let questions=this.props.addQuestion.questions
        questions.find(item=>item.id===this.qid).answers.push(this.state)
        this.props.changeData("saveanswer",questions)
    }
    like(id){
        let questions=this.props.addQuestion.questions
        questions.find(item=>item.id===this.qid).answers.find(a=>a.id===id).likes++
        this.props.changeData("inclike",questions)
    }
    render() {        
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {
                                this.ques.question
                            }
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {
                            this.ques.answers.map((a,i)=>(
                                <tr key={i} >
                                    <td key="1">
                                        {a.id}
                                    </td>
                                    <td key="2">
                                        {a.answer}
                                    </td>
                                    <td key="2">
                                        {a.likes}
                                        <button onClick={this.like.bind(this,a.id)}>like</button>
                                    </td>
                                </tr>
                                ))
                        }
                    </tr>
                    </tbody>

                    
                </table>
                <div className="w-25">
                    id:<input data-id="id" onChange={this.change.bind(this)} value={this.props.id} type="text" className="form-control" />
                    answer:<input data-id="answer"  onChange={this.change.bind(this)} value={this.props.answer} type="text"  className="form-control" />
                    <button onClick={this.save.bind(this)}   className="btn btn-primary" >Add Unswer</button>
                </div>
            </div>
        )
    }
}

function mapstatetoprops(state) {
    return{
        addQuestion:state.AddQuestionsReduser,
        topquestions:state.TopQuestionsReduser,
    }
    
}
function mapdispatchtoprops() {
    return{
        changeData,
    }  
}
export default connect(mapstatetoprops,mapdispatchtoprops())(Question)

