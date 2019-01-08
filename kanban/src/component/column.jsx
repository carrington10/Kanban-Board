import React from 'react';
import styled from 'styled-components';
import Task from './task.jsx';
import { Droppable } from  'react-beautiful-dnd';
import axios from 'axios';

const Container = styled.div`
    margin: 8px;
    border: 10px solid  #05054A;
    border-radius: 2px;
    flex-direction: column;
    display: flex;
    width:400px;
    background-color: #FFF5EE;
    border-background: white ;
    text-align: center;
    width: 500px;
    
    `;
const LightedT = styled.div`
   color: black;
`
const Title =styled.h1`

  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid white;
  background: #0B0B4A;
  font-family:  courier;
  font-weight: bold;
  color:white;
  
`;
const TaskList = styled.div`
padding: 8px;
transition: background-color 0.2s ease;
background-color: #FFF5EE;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : '')};
flex-grow: 1;
min-height: 100px;
`;
export default class Column extends React.Component {
    state = {
        taske: [],
        listC: []
        
    }
    
    componentDidMount(){
        axios.get('/tasks')
            .then(res => {
                    const taske= res.data;
                    this.setState({taske})
            })// end of get api
    }// end of mounting component

     checkT(taske,columnId){
        this.state.taske.map((task) => {
            console.log(task.id)
            console.log(task.name)

            if(task.columnId === columnId){
                    this.state.listC.push(task)
                    console.log("it has been added")
            }// end of if
          
        })
}
    
    render(){
        this.checkT(this.state.taske,this.props.checkId)
      
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
                      {this.state.listC.map((task,index) => ( 
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