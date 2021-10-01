
import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default class App extends Component {
 apiKey=process.env.REACT_APP_NEWS_API

  state ={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
    return (
      <div>
         <Router>
         <NavBar/>
       
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />

         <Switch>

          <Route exact path="/"><News setProgress = {this.setProgress}  apiKey={this.apiKey}key="eneral" pageSize={12} country="in" category="general"/> </Route>
          <Route exact path="/business"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="business" pageSize={12} country="in" category="business"/> </Route>
          <Route exact path="/entertainment"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={12} country="in" category="entertainment"/> </Route>
          <Route exact path="/general"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="general" pageSize={12} country="in" category="general"/> </Route>
          <Route exact path="/health"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="health" pageSize={12} country="in" category="health"/> </Route>
          <Route exact path="/science"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="science" pageSize={12} country="in" category="science"/> </Route>
          <Route exact path="/sports"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="sports" pageSize={12} country="in" category="sports"/> </Route>
          <Route exact path="/technology"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="technology" pageSize={12} country="in" category="technology"/> </Route>
          
        </Switch>
         </Router>
      </div>
    )
  }
}
