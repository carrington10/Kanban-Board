import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import './Header.css'

class Head extends React.Component{

    render(props){
        return (
            <div>
           
                        <Navbar className = "navo">
                                <Navbar.Header>
                                    <Navbar.Brand>
                                          <a href="#home">WSM </a>
                                    </Navbar.Brand>
                                </Navbar.Header>
                                <Nav className = "highlightC">
                                    <NavItem eventKey={1} href="#"> Home </NavItem>
                                    <NavItem eventKey={2} href="#">Features </NavItem>
                                </Nav>
                        </Navbar>;
                 
            </div>
        )// end of return 
    }// end of render

}// end of class

export default Head;