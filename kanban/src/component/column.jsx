import React from 'react';
import styled from 'styled-components';
import Task from './task.jsx';
import { Droppable } from  'react-beautiful-dnd'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    background-color: #efdab9;
    width: 400px;
    border-radius: 25px;
    
    `;
const Title =styled.h2`

  font-weight: bold;
  color: grey; 
  text-align: center;
  border-bottom: 2px solid white;
  font-family: sans-serif;
`;
const TaskList = styled.div`
padding: 10px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? '#574c4F' : '')};
`;
export default class Column extends React.Component {
    render(){
        return (     
          
                 <Container>
                      
                    <Title> {this.props.column.title}</Title>
                   
                    <Droppable droppableId={this.props.column.id}>
                     {(provided,snapshot) => (
                        <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                      {this.props.tasks.map((task,index) => ( 
                      <Task key={task.id} task = {task} index = {index}/>
                      ))}
                      {provided.placeholder}
                    </TaskList>
                     )}
                    </Droppable>
                    </Container>
        );
    }// end of render 
}// end of column extend 