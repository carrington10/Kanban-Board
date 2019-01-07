import React from 'react'
import axios from 'axios'
import { Button, Checkbox, Form,TextArea } from 'semantic-ui-react'
class AddTask extends React.Component{
    state = {
        name: '',
        task: ''
    }

    handleNameChange = event => {
        const namee = event.target.value
        this.setState({ name: namee});
        console.log(this.state.name)
      
    };
    handleTaskChange = event => {
        const taske = event.target.value
        this.setState({ task: taske})
        console.log(this.state.task)

    }
    handleSubmit = event => {
        event.preventDefault();

        
          var postName = this.state.name
          console.log(postName)
           var postTask = this.state.task
        // end of task object to pass
    
        axios.post('/addtask', {
            name: postName,
            task: postTask
             }).then(res => {
           console.log(res)
           this.props.history.push('/')
        })// end of post to the api 
        
    }
    
    render() {
               return(
                   <div>
                       <h1> Add Task </h1>
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
                            <Button type="submit"> Add Task</Button>
                        </Form>
                   </div>
               )
    }
}// end of AddTask

export default AddTask;