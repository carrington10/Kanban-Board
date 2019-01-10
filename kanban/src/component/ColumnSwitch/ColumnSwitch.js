import React from 'react';
import axios from 'axios'
import Popup from "reactjs-popup";
import { Button, Checkbox, Form,TextArea } from 'semantic-ui-react';

class ColumnSwitch extends React.Component {
        handleButton = (value) => (e)  => {
              e.preventDefault();
                if(value === 1){
                        axios.post('/moveTask', {
                                id: this.props.id,
                                columnId: value
                                 }).then(res => {
                               console.log(res)
                               window.location.reload();
                            
                            })// end of post to the api  
                }// end of if 
                else if ( value === 2){
                        axios.post('/moveTask', {
                                id: this.props.id,
                                columnId: value
                               }).then(res => {
                             console.log(res)
                             window.location.reload();
                            
                          })// end of post to the api  

                }// end of else if
                else if ( value === 3){
                        axios.post('/moveTask', {
                                id: this.props.id,
                                columnId: value
                               }).then(res => {
                             console.log(res)
                             window.location.reload();
                         
                          })// end of post to the api  
                                
                }// end of else if
                else if ( value === 4){
                        axios.post('/moveTask', {

                                id: this.props.id,
                                columnId: value
                               }).then(res => {
                             console.log(res)
                             window.location.reload();
                          })// end of post to the api  
                }// end of else if
        }// end of handle submit
render(props){
            return(
                    <Popup
                    trigger={<button className="ui blue mini button"> Move Task</button>}
                    modal
                    closeOnDocumentClick
                    >
                    <h3> Move To</h3>
                        <div className="ui orange button"  onClick={this.handleButton(4)}> BackLog</div>
                        <div className="ui violet button" onClick={this.handleButton(1)}> In Progress</div>
                        <div className="ui teal button" onClick={this.handleButton(2)}> Impediments</div>
                        <div className="ui pink button" onClick={this.handleButton(3)}> Done</div>
                    </Popup>
            )
    }// end of render 

}// end of class
export default ColumnSwitch 