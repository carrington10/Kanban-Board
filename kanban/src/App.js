import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import initialData from './data/initial-data.js';
import Column from './component/column.jsx';
import {DragDropContext}  from 'react-beautiful-dnd';
import  head from './component/header.js'


const Container = styled.div`
display: flex;
 `;
class App extends React.Component{
   
    state = initialData;
    
    onDragEnd = result => {
   
       // document.style.backgroundColor = 'inherit';
        const { destination,source,draggableId} = result;

        if (!destination){
           return;
        }// end of if

        if(
            destination.droppableId === source.droppableId && 
            destination.index == source.index

        ){
                  return;
        }// end of if 
       /// to do 
       const start = this.state.columns[source.droppableId];
       const finish = this.state.columns[destination.droppableId]
       if (start === finish){
                    const newTasksIds = Array.from(start.taskIds)
                    newTasksIds.splice(source.index,1);
                    newTasksIds.splice(destination.index,0,draggableId);
                    const newColumn = {
                                    ...start,
                                    taskIds: newTasksIds,
                                };
                        
                                const newState = {
                                ...this.state,
                                columns: {
                                    ...this.state.columns,
                                    [newColumn.id]: newColumn,
                                },
                        }// end of new state
                     this.setState(newState);
                     return;
       }// end of start === finish    

       // move list to another 
       const startTaskIds = Array.from(start.taskIds);
       startTaskIds.splice(source.index,1);
       const newStart = {
           ...start,
           taskIds:startTaskIds,
       };
       const finishTaskIds = Array.from(finish.taskIds);
       finishTaskIds.splice(destination.index,0,draggableId);
       const newFinish = {
           ...finish,
           taskIds: finishTaskIds,
       };

       const newState = {
           ...this.state,
           columns: {
            ...this.state.columns,
           [newStart.id]: newStart,
           [newFinish.id]: newFinish,

           }
       }
       this.setState(newState);
       
    };
    render () {
       
        return (
         
           
           <DragDropContext
               
                onDragEnd = {this.onDragEnd}>
               <Container>
                    {this.state.columnOrder.map(columnId => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                    return <Column key={column.id} column={column} tasks={tasks}></Column>
                    })}
               </Container>
           </DragDropContext>
           
        )// end of return 
    }

}// end of app extends 
export default App;