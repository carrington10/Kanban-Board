import React from 'react'
import axios from 'axios'
import { Button,Form,TextArea,Header } from 'semantic-ui-react'
class AddTask extends React.Component{
    state = {
        name: '',
        task: '',
        estimatedTime: '',
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
        console.log("here is the value in this event  " + event.target.value)
         const timee = event.target.value
         this.setState({ estimatedTime: timee })

    }// end of estimated Time Change 
    handleSubmit = event => {
        event.preventDefault();
          var postName = this.state.name
           var postTask = this.state.task
           var postTime = this.state.estimatedTime
           console.log(" here is estimated time change " + this.state.estimatedTime)
           console.log(" here is name" + this.state.name)
        // end of task object to pass
    
        axios.post('/addTask', {
            name: postName,
            task: postTask,
            estimatedTime: postTime
             }).then(res => {
           this.props.history.push('/')
        })// end of post to the api 
        
    }
    
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