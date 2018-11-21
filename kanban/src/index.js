import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import Column from './column.jsx';


class App extends React.Component{
    state = initialData;
    render () {
       
        return this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
            return <Column key={column.id} column={column} tasks={tasks}></Column>
        });
    }

}// end of app extends 
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
