import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cswitch from './ColumnSwitch/ColumnSwitch.js'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    font-family: 'Helvetica';
    
   height:flex;
    border-radius: 25px;
    font-family:  sans-serif;
    fontw-weight:bold;
    font-weight: 900;
    background-color:green;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'lightgreen')};
`;
const Line = styled.div`
border-bottom: 2px solid #ccc;
`;

const Handle = styled.div `
 width: 25px;
 height: 25px;
 background-color: #05054A;
 border-raduis: 
 margin-right: 8px; 
 border-radius: 25px;
`;



export default class Task extends React.Component {
     
    
    handleClick = event => {
        event.preventDefault()
        console.log('this is id')
        console.log(this.props.task.id)
        event.preventDefault();
        axios.post('/deleteTask', {
            id: this.props.task.id
             }).then(res => {
           console.log(res)
 
        })
        window.location.reload();
    }// end of handle submit 
    
    render (){
        var project = this.props.task.task
        console.log("here it is")
        console.log(project)
        console.log(this.props.task.id)
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided, snapshot) => (
                 <Container
                 {...provided.draggableProps}
              
                 ref={provided.innerRef}
                 isDragging = {snapshot.isDragging}
                 >  
                    <Handle    {...provided.dragHandleProps} > </Handle>
                       Task: {this.props.task.task} 
                       <br></br>
                        Created By: {this.props.task.name} 
                        <br></br>
                       Date Created: { this.props.task.date}
                       <br></br>
                     <button class="ui yellow mini button">  <Link to={{ pathname:'/edittask',state: {  task: this.props.task.task, id: this.props.task.id }         }}>Edit </Link> </button>
                        <button class="ui red mini button"  onClick={this.handleClick} >Delete</button>
                        <Cswitch id = {this.props.task.id}></Cswitch>
                 </Container>
            )}
             </Draggable>
         )// end of return
    }// end of render
}// end of component 