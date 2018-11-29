import React from 'react';

import { Navbar, Nav, NavItem} from 'react-bootstrap';

class Head extends React.Component{

    render(props){
        return (
            <div>

                        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
   
  </Nav>
</Navbar>;


            </div>
                                       

        )
    }// end of render

}// end of class

export default Head;