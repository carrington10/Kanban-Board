import React from 'react'
import axios from 'axios'
import { Button, Checkbox, Form,TextArea } from 'semantic-ui-react'

class EditTask extends React.Component{
    state = {
        id: this.props.location.state.id,
        task: this.props.location.state.task
    }

    render(){
        console.log("hello")
          console.log(this.state.id)
                return(
                    <div>
                     <h1>Edit Task </h1>
                     <bt></bt>
               <p>    {this.state.task} </p> 
               <p>     {this.state.id} </p>
                    </div>
                )// end of rteturn 
            }// end of render 
}// end of editTask

export default EditTask;
