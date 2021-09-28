import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import reactDom from 'react-dom';
import styled from 'styled-components';
import { Form } from 'react-bootstrap'
import './styles/Modal.css'
import { useAlert } from 'react-alert'

import { update } from '../actions/authactions'
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
  color: #FFF;
  font-size: 24px;
  cursor: pointer;
  margin-right:10px;
  margin-top:10px;
`;
  

export default function Modal({ open, children, onClose,off}) {
    const [bl, setbl] = useState(false);
    const [ubl, setubl] = useState(true);
    const [id,setid]= useState({});
    // const [message,setmessage]= useState('');
    const [obj,setobj]= useState({})
    const dispatch= useDispatch();
    const alert=useAlert()
    const {isUpdated}=useSelector(state=>state.updateimages)

    useEffect(()=>{   
   
        
        
       
        if(isUpdated){
          
            alert.success('Profile updated successfully')
            // history.push('/dashboard')
            window.location.href = "./dashboard";
             }
    
       
    },[dispatch,alert,isUpdated])
    const handleid= (e)=>{
      
           setid({...id,[e.target.name]:e.target.value})
           
    }
  
    const handlechange= (e)=>{
    
             setobj({...obj,[e.target.name]:e.target.value})
     
      
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log("obj",obj);
        if(obj.message===undefined){
            dispatch(update(id.id,{"status":"Active"}))
        }
        else {

            dispatch(update(id.id,{"status":"Block","message":obj.message}))
        }

       console.log("objects",obj);
       console.log("id",id);
    }

const handlebutton=(e)=>{
    // onClick={()=>{setubl(true)}} onClick={()=>{setbl(false)}}
    setubl(false)
    setbl(true)
    console.log("bl",bl)
    console.log("ubl",ubl)
}

    if (!open) return null;
    
    return reactDom.createPortal(
        <>
            
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES} className="p">
            <div className="pl">
                <i onClick={()=>{window.location.href="./dashboard"}} className="fas fa-times cross"></i>
                <div className="cj">
                {bl?null:<Button onClick={()=>{setbl(true)}}   name="block">Block</Button>}
                    {bl ?
                        <Form onSubmit={handlesubmit}>
                       {ubl? <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Reason</Form.Label>
                            <Form.Control type="text" placeholder="enter reason" size="50" name="message" onChange={(e)=>handlechange(e)} />
                                </Form.Group>:null}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Driver ID</Form.Label>
                            <Form.Control type="text" name="id" onChange={(e)=>handleid(e)}  placeholder="enter ID" size="50" />
                        </Form.Group>

                       
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
                        </Form.Group>
                        <Button variant="primary" type="submit"  name="confirm">
                            Confirm
                        </Button>
                        </Form> 
                    
                    : null}
                    {bl ?null: <Button className="unb"  onClick={(e)=>handlebutton(e)}     name="unblock">UnBlock</Button> }
                   
                   
                 {children}
                  </div>
                </div>
            </div>
        </>,
                document.getElementById('portal')
    )
}