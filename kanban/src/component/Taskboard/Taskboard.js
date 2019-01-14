
import React, { Component } from 'react';
import styled from 'styled-components';
import initialData from '../data/initial-data.js';
import Column from '../column';
import { Button, Checkbox, Form,TextArea } from 'semantic-ui-react'



const Container = styled.div`
display: flex;
 `;
class Taskboard extends React.Component{
    state = initialData;
    render () {
       
        return (
            <div>
                <button  class =" ui green button"  >
                <a href="/addTask">Add Task</a>
                </button>
                    <Container>
                    {this.state.columnOrder.map(columnId => { 
                            const column = this.state.columns[columnId];
                            return <Column key={column.id} column={column} checkId = {column.checkId} ></Column>
                    })}
                    </Container>
           </div>
        )// end of return 
    }// end of render 
    
}// end of taskboard classboard class

export default Taskboard;