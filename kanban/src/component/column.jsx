import React from 'react';
import styled from 'styled-components';
import Task from './task.jsx';
import { Droppable } from  'react-beautiful-dnd';
import axios from 'axios';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    flex-direction: column;
    display: flex;
    width:400px;
    background-color: #efdab9;
    border-background: transparent;
    text-align: center;
    `;
const LightedT = styled.div`
   color: green;
`
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
    state = {
        taske: []
    }
    componentDidMount(){
        axios.get('/users')
            .then(res => {
                    const taske= res.data;
                    this.setState({taske})
            })// end of get api
    }// end of mounting component
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
                      {this.state.taske.map((task,index) => ( 
                      <Task key={task.id} task = {task} index = {index}/>
                      ))}
                      {provided.placeholder}
                    </TaskList>
                     )}
                    </Droppable>
                     <LightedT> <a href="#">Add Task</a></LightedT>
                    
                    </Container>
        );
    }// end of render 
}// end of column extend 