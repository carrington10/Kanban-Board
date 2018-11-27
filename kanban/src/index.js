import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './data/initial-data.js';
import Column from './component/column.jsx';
import {DragDropContext}  from 'react-beautiful-dnd';
import  head from './component/header.js'


class App extends React.Component{
    state = initialData;

    onDragEnd = result => {
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
       const column = this.state.columns[source.droppableId];
       const newTasksIds = Array.from(column.taskIds);
       newTasksIds.splice(source.index,1);
       newTasksIds.splice(destination.index,0,draggableId);

       const newColumn = {
           ...column,
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
    };
    render () {
       
        return (
         
         
           <DragDropContext onDragEnd = {this.onDragEnd}>
         
               {this.state.columnOrder.map(columnId => {
               const column = this.state.columns[columnId];
               const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
               return <Column key={column.id} column={column} tasks={tasks}></Column>
            })}
           </DragDropContext>
           
        )// end of return 
    }

}// end of app extends 
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

