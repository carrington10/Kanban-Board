import React from 'react';
import styled from 'styled-components';
import Task from './task.jsx';
const Container = styled.div`
    margin: 8px;
    border: 1x solid lightgrey;
    border-raduis: 2px`;
const Title =styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px `;
export default class Column extends React.Component {
    render(){
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <TaskList>
                    {this.props.tasks.map(task => <Task key={task.id} task={task} />)} 
                </TaskList>
            </Container>
        );// end of return
    };// end of render
}// end of react component