import React from 'react'
import axios from 'axios'
import { Button,Form,TextArea,Header } from 'semantic-ui-react'
class AddTask extends React.Component{
    state = {
        name: '',
        task: '',
        estimatedTime: '',
        //nameValid: false,
        //taskValid: false,
        //estimatedValid: false,
    }// end of state 

    handleNameChange = event => {
        const namee = event.target.value
        this.setState({ name: namee});
    };// end of handle name channge

    handleTaskChange = event => {
        const taske = event.target.value
        this.setState({ task: taske})
    }// end of handle Task change

    handleEstimatedTimeChange = event => {
         const timee = event.target.value
         this.setState({ estimatedTime: timee })

    }// end of estimated Time Change 

    handleSubmit = event => {
        event.preventDefault();
        var bool =  validate(this.state.name,this.state.task,this.state.task)
          if(bool)
          {
                    var postName = this.state.name
                    var postTask = this.state.task
                    var postTime = this.state.estimatedTime
                    // end of task object to pass
                
                    axios.post('/addTask', {
                        name: postName,
                        task: postTask,
                        estimatedTime: postTime
                        }).then(res => {
                    this.props.history.push('/')
                    })// end of post to the api 
           }// end of if bool for checking to see if value empty

          else{
               console.log('invalid please fill in blanks ')
          }
        function validate (name,task,time){
      if(name.length === 0 | task.length === 0 | time.length === 0){
          return false;
      }
      else {
          return true
      }
        }// end of validate function 
        
    }// end of event handler 
    
    render() {
               return(
                   <div>
                       <h2 class="ui header" > Add Task </h2>
                       <line></line>
                        <Form onSubmit={this.handleSubmit}>
                       
                            <Form.Field   name="postName" onChange={this.handleNameChange} >
                            <label> Name </label>
                            <input placeholder='Name' />
                        </Form.Field>
                             
                        <br></br> 
                        <TextArea  placeholder="Task"  task="postTask" onChange={this.handleTaskChange}>
                          
                           </TextArea>
                        <br></br>
                        <br></br>
                        <Form.Field   name="postTime" onChange={this.handleEstimatedTimeChange} >
                            <input placeholder='EstimatedTime' />
                        </Form.Field>
                            <button class = 'ui blue button' type="submit"> Add Task</button>
                        </Form>

                      
                   </div>
               )
    }
}// end of AddTask

export default AddTask;