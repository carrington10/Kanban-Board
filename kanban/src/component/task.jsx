import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cswitch from './ColumnSwitch/ColumnSwitch.js'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    font-family: 'Helvetica';
    
   height:flex;
    border-radius: 25px;
    font-family:  sans-serif;
    fontw-weight:bold;
    font-weight: 900;
    background-color: ${props => props.theme};
`;
const Line = styled.div`
border-bottom: 2px solid #ccc;
`;

const Handle = styled.div `
 width: 25px;
 height: 25px;
 background-color: #05054A;
 border-raduis: 
 margin-right: 8px; 
 border-radius: 25px;
`;





export default class Task extends React.Component {
    
    checkDate(taskDate){
        var color = 'lightgreen'
        var date  = new Date();
        var d = date.getDate();
        var m = date.getMonth()+1
        if(m < 10 ){
            m = "0"+ m
        }// end of if 
        var y = date.getFullYear();
   
        var formatDate = y + "-" + m +"-" +d;
        // chek the date 
        if(taskDate === formatDate){
            color = 'red';
            return color;
        }// end of if 
        else{
            return color 
        }// end of else
        
    }// end of check Date
    
    handleClick = event => {
        event.preventDefault()
        event.preventDefault();
        axios.post('/deleteTask', {
            id: this.props.task.id
             }).then(res => {
 
        })
        window.location.reload();
    }
    render (){
     
        var hold= this.checkDate(this.props.task.days);
        return (
        
                 <Container theme =  {hold}>  
                            <Handle  > </Handle>
                            Task: {this.props.task.task} 
                            <br></br>
                                Created By: {this.props.task.name} 
                                <br></br>
                            Date Created: { this.props.task.date}
                            <br></br>
                            Estimated Time: {this.props.task.estimatedTime}
                            <br></br>
                            <button class="ui yellow mini button">  <Link to={{ pathname:'/edittask',state: {  task: this.props.task.task, id: this.props.task.id }         }}>Edit </Link> </button>
                                <button class="ui red mini button"  onClick={this.handleClick} >Delete</button>
                                <Cswitch id = {this.props.task.id}></Cswitch>
                 </Container>
            
          
         )// end of return
    }// end of render
}// end of Task Component 