import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Question from './components/Question'
import Answer from './components/Answer'
import CreateAnswer from './components/create-answer'
import CreateQuest from './components/create-quest.component'



class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/questions" component={Question} />
            <Route exact path="/questions" component={CreateQuest} />
            <Route exact path="/answers" component={Answer} />
            <Route exact path="/answers" component={CreateAnswer} />
            
            
            
          </div>
        </div>
      </Router>
    )
  }
}

export default App
