import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    font-family: 'Helvetica';
    display: flex;
    height: 10x;
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
 width: 18px;
 height: 18px;
 background-color: #05054A;
 border-raduis: 5px;
 margin-right: 8px; 
 border-radius: 25px;
`;

export default class Task extends React.Component {
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
                       <Link to={{ pathname:'/edittask',state: {  task: this.props.task.task, id: this.props.task.id }         }}>edit task </Link>
                        <br></br>
                        
                 </Container>
            )}
             </Draggable>
         )// end of return
    }// end of render
}// end of component 