import React, { useState } from 'react'
import reactDom from 'react-dom';
import styled from 'styled-components';
import { Form } from 'react-bootstrap'
import './styles/Modal.css'
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}
  
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin-right:10px;
  margin-top:10px;
`;
  

export default function Modal({ open, children, onClose,off}) {
    const [bl, setbl] = useState(false);
    if (!open) return null;
    
    return reactDom.createPortal(
        <>
            
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES} className="p">
            {/* <h2> Do you want to block this Driver?
                    </h2>  */}
                <div className="cj">
                <h4> Do you want to block this Driver?
                    </h4> 
                   
                {bl?null:<Button onClick={()=>{setbl(true)}}>Block</Button>}
                    {bl ?
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Reason</Form.Label>
                            <Form.Control type="text" placeholder="enter reason" size="50" />
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Admin Password</Form.Label>
                            <Form.Control type="password" placeholder="password" />
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={off}>
                            Block
                        </Button>
                        </Form> 
                    
                    : null}
                </div>
                {bl ? null : <Button className="unb" onClick={off}>UnBlock</Button>}
                 {children}
            </div>
        </>,
                document.getElementById('portal')
    )
}

