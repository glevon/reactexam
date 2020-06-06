import React, { Component } from 'react'
import {BrowserRouter,Route,Link} from "react-router-dom"
import {createStore} from "redux"
import {Provider} from 'react-redux'
import reducers from "./store/reducers"
import AddQuestions from './components/AddQuestions'
import TopQuestions from './components/TopQuestions'
import Question from './components/Question'

let store =createStore(reducers)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
          <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" >AddQuestions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/topquestions" >TopQuestions</Link>
            </li>
          </ul>
          </nav>
          <Route path="/" exact component={AddQuestions} />
          <Route path="/topquestions" component={TopQuestions} />
          <Route path="/question" component={Question} />

        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
