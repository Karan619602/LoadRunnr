import React, { Fragment } from 'react'
import {  Link } from 'react-router-dom'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'

import { logoutdriver } from './actions/authactions'
import './App.css'

const Header = () => {
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logoutdriver());
    }

    return (
        <Fragment>
           
             
                
<div className="navbar">
          {user ? (
            <Navbar bg="light" expand="lg" className="nvb">
            <Container className="ct2">
              <Navbar.Brand href="/"> LoadRunnr </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto tmp">
                  {user && user.role==="admin" &&(<Link to="/dashboard" className="lk"> Dashboard</Link>)}
                  <Link className="text-danger" to="/" onClick={logoutHandler}>Logout</Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
          
            
      ) :   (
                        <div>
                                                  {/* <a onClick={()=>{window.location.href="./login"}} >Login</a> */}
                                              <div className="nv">
                                                  <Link to="/login"  >login</Link>
                                                  <hr />
                                                  <Link to="/register"  >signup</Link>
                                              
                                                 
                                              </div>
                        </div>
                       )} 


</div>
                </Fragment> 

      
    )
}

export default Header