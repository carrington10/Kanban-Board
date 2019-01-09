import React, { Component } from 'react';
import Navo from './component/Header/Header.js'
import Taskboard from './component/Taskboard/Taskboard.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TaskBoard from './component/Taskboard/Taskboard.js'
import Features from './component/Features/Features.js'
import AddTask from './component/AddTask/AddTask.js'
import EditTask from './component/EditTask/EditTask.js'
class App extends React.Component{
   
  render() {
      return (

        <div >
                            <Router>
                        <div>
                            <Navo/>
                                  <Switch>
                                      <Route path="/" component={TaskBoard} exact />
                                      <Route path="/features"  component={Features}> </Route>
                                      <Route path="/addtask" component={AddTask}> </Route>
                                      <Route path="/edittask" component={EditTask}>  </Route>
                                  </Switch>
                              
                        </div>
                  </Router>
        
        
            
        
        </div>
      )
  }

}// end of app extends 
export default App;