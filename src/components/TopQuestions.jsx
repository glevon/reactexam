import React, { Component } from 'react'
import {connect} from "react-redux"
import changeData from "../store/TopQuestions/action"
import {Link} from "react-router-dom"

class TopQuestions extends Component {
    save_id(id){
        this.props.changeData("saveid",id)

    }
    render() {
        return (
            <div>
            <h1>Top Questions</h1>
           
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th key="1">
                            Questioan
                        </th>
                        <th key="2">
                            Category
                        </th> 
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.addQuestion.questions.map((a,i)=>(
                    <tr key={i} >
                        <td key="1">
                        <Link onClick={this.save_id.bind(this,a.id)} to="/question" >{a.question}</Link>
                        </td>
                        <td key="2">
                            {a.category}
                        </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        )
    }
}
function mapstatetoprops(state) {
    return{
        addQuestion:state.AddQuestionsReduser,
        topquestions:state.TopQuestionsReduser
    }
    
}
function mapdispatchtoprops() {
    return{
        changeData,
    }  
}
export default connect(mapstatetoprops,mapdispatchtoprops())(TopQuestions)
