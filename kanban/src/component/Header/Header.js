import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Link , BrowserRouter as Router,NavLink }  from "react-router-dom";
import Routes from '../Routes.js';
import './Header.css'

const Header =() => {

    
        return (
            <div>
             
                        <Navbar className = "navo">
                       
                                <Navbar.Header>
                                
                                        <h1> WSM  Kanban </h1>
                                  
                                </Navbar.Header>
                                
                                
        
                                
                            
                                <Nav className = "highlightC"  pullRight >
                                    <NavItem>  <NavLink  to="/">Taskboard</NavLink>  </NavItem>
                                    <NavItem>  <NavLink  to="/features">Features</NavLink>  </NavItem>
                               </Nav>
                        </Navbar>;
                        
            </div>
        )// end of return 
    }// end of render

// end of class

export default Header;