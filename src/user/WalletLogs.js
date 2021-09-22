import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './styles/VerifyDocuments.css'
import  {Form,Row,Col,Card,Button} from 'react-bootstrap'
import './styles/WalletLogs.css'
import { updateUser, getdriverDetails} from '../actions/authactions'

const WalletLogs=({match})=> {
  const dispatch= useDispatch();
  const {driver}=useSelector(state=>state.driverdetails)
  const driverId = match.params.id;

  useEffect(()=>{   
   
        

    dispatch(getdriverDetails(driverId)) 
   

  
},[dispatch,driverId])



    return (
        <div className="logs">
            {/* <div className="head"> Welcome admin Dashboard !</div> */}
            <div className="wrapper2">
          
            <div className="first">
                <div className="a">
                <img src={driver.Profile_Photo ? driver.Profile_Photo.url : ''} alt='png'></img>
                {/* <input type="file" className="pt" name="Aadhar_Photo_Back" onChange={(e)=>handleimagechange(e)} ></input> */}
                </div>
                <div className="b">
                    <div>
                        <div className="s" > <div className="ff driver" >Driver ID:-{driver._id}  </div> </div>
                        <div className="s" > <div className="ff">Name:- {driver.firstname} {driver.lastname} </div></div>
                        <div className="s" > <div className="ff">Mobile Number:- {driver.Phone_No}</div></div>
                        {/* <div>Alternate Number: {driver.Alternate_No} </div> */}
                        <div>Emergency Number:- {driver.Emergency_No} </div>  
                    
                  
                   {/* <div className="wrap">
                     <Form.Group as={Row} className="mb-3" >
                       {/* // <Form.Label column sm="1">
                         Emergency_No:
                        </Form.Label> 
                        Emergency_No:
                        <Col sm="10">
                        {/* <Form.Control type="text" readOnly={r1} placeholder={driver.Emergency_No}  /> 
                        <input type="text" readOnly={r1} placeholder={driver.Emergency_No}  />
                        </Col>
                     </Form.Group>
                     
                    <button type="button" className="bt" onClick={() => { setr1(!r1) }}>Edit icon</button>
                    
                   </div> */}
                                        {/* <div>Emergency Number:- {driver.Emergency_No} </div>   */}

                   
                  </div>
                </div> </div> </div>
            <div className="bottom">
                  
            <div className="row quick-action-toolbar">
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-header d-block d-md-flex">
                    <h5 className="mb-0">Quick Actions</h5>
                    <p className="ml-auto mb-0">How are your active users trending overtime?<i className="icon-bulb"></i></p>
                  </div>
                  <div className="d-md-flex row m-0 quick-action-btns" role="group" aria-label="Quick action buttons">
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0">
                           <i className="fa fa-user mr-2"></i> Total Earnings </button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0">
                          <i className="fa fa-briefcase"></i>Total Drivers </button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="fa fa-folder mr-2"></i> Total Trips </button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="fa fa-anchor menu-icon"></i>Total Users </button>
                    </div>
                    
                      <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="fa fa-tripadvisor"></i>Upcoming TripList </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
        </div>
    )
}

export default WalletLogs
 