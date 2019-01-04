import React from 'react'
import axios from 'axios'
import { createHashHistory } from 'history'
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
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Name
                                <input type="text" name="postName" onChange={this.handleNameChange} />>
                            </label>

                            <label>
                                task
                                <input type="text" task="postTask" onChange={this.handleTaskChange} />>
                            </label>
                            <button type="submit"> Add Task</button>
                        </form>
                   </div>
               )
    }
}// end of AddTask

export default AddTask;