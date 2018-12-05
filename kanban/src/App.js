import React, { Component } from 'react';

import Navo from './component/Header/Header.js'
import Taskboard from './component/Taskboard/Taskboard.js'

class App extends React.Component{
   
  render() {
      return (

        <div >
              <Navo title = 'WSM'> </Navo>
            <Taskboard> </Taskboard>
        
        </div>
      )
  }

}// end of app extends 
export default App;