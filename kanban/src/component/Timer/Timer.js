import React, { Component } from 'react';
import Timer from 'react-compound-timer';




class TimerCount extends React.Component{
       render(){
           return (
            <Timer
            initialTime={55000}
            direction="backward"
        >
            {() => (
                <React.Fragment>
                    <Timer.Days />:
                    <Timer.Hours />:
                    <Timer.Minutes />:
                    <Timer.Seconds />
                    
                </React.Fragment>
            )}
        </Timer>

           )
       }

}// end of taskboard

export default TimerCount;