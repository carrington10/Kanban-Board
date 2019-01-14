import React from 'react';
import styled from 'styled-components';
import Task from './task.jsx';
import axios from 'axios';

const Container = styled.div`
    margin: 8px;
    border: 10px solid  #05054A;
    border-radius: 25px;
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
border-radius: 25px;
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
    }// end of state 
    
    componentDidMount(){
        axios.get('/tasks')
            .then(res => {
                    const taske= res.data;
                    this.setState({taske})
            })// end of get api
    }// end of mounting component

     checkT(taske,columnId){
                this.state.taske.map((task) => {
                    if(task.columnId === columnId){
                            this.state.listC.push(task)
                    }// end of if
                
                })
        }// end of check T function to list the tasks to each column
    
    render(){
        this.checkT(this.state.taske,this.props.checkId)
      
        return (     
            
                 <Container>            
                            <Title> {this.props.column.title}</Title>
                                    <TaskList>
                                    {this.state.listC.map((task,index) => ( 
                                    <Task key={task.id} task = {task} index = {index} theme='lightgreen'/>
                                    ))}
                            </TaskList>         
                    </Container>
            
        );// end of return 
    }// end of render 
}// end of column extend 