import React from 'react';
import styled from 'styled-components';
import Task from './task.jsx';
import { Droppable } from  'react-beautiful-dnd'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    flex-direction: column;
    display: flex;
    width:400px;
    background-color: #efdab9;
    `;
const Title =styled.h1`

  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid white;
  background: white;
  font-family:  courier;
  font-weight: bold;
  
`;
const TaskList = styled.div`
padding: 8px;
transition: background-color 0.2s ease;
background-color: #efdab9;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : '')};
flex-grow: 1;
min-height: 100px;

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