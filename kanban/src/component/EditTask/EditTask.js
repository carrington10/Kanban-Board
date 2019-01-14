import React from 'react'
import axios from 'axios'
import { Button, Checkbox, Form,TextArea } from 'semantic-ui-react'

class EditTask extends React.Component{
    state = {
        id: this.props.location.state.id,
        task: this.props.location.state.task
    }

    handleTaskChange = event => {
        const taske = event.target.value
        this.setState({ task: taske})

    }
    handleSubmit = event => {
        event.preventDefault();

           var postTask = this.state.task
        // end of task object to pass
    
        axios.post('/editTask', {
            id: this.state.id,
            task: postTask
             }).then(res => {
           this.props.history.push('/')
        })// end of post to the api 
    }

    render(){
                return(
                    <div>
                <h1>Edit Task  </h1>
                <line></line>
                <Form onSubmit={this.handleSubmit}> 
                <br></br> 
                <TextArea  placeholder={this.state.task} task="postTask" onChange={this.handleTaskChange}>
                    </TextArea>
                <br></br>
                <br></br>
                    <Button type="submit"> Submit Edit </Button>
                </Form>
                </div>
                )// end of rteturn 
            }// end of render 
}// end of editTask

export default EditTask;
