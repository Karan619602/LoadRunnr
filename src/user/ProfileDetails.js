import React,{Fragment,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { Form, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import './styles/ProfileDetails.css'
import {  getdriverDetails} from '../actions/authactions'

const  ProfileDetails=({match})=> {


  const dispatch= useDispatch();
  const {driver}=useSelector(state=>state.driverdetails)

  const driverId = match.params.id;

useEffect(()=>{ 

  dispatch(getdriverDetails(driverId)) 


},[dispatch,driverId])
    return (
        <div>
             <div className="head"> Welcome admin Dashboard !</div>
             <div className="bottom">
                
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Driver first Name</Form.Label>
 
      <Form.Control type="text" placeholder={driver.firstname} disabled/>
      
    </Form.Group>

    <Form.Group as={Col} controlId="formGridphoto">
                            <Form.Label>Profile pic</Form.Label>
                            <img src={driver.Profile_Photo?driver.Profile_Photo.url:''} className="img" alt="" ></img>
                            
      </Form.Group>
  </Row>
  <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Driver last Name</Form.Label>
 
      <Form.Control type="text" placeholder={driver.lastname} disabled/>
      
    </Form.Group>
 <Form.Group  className="mb-3" controlId="formGridMobile">
    <Form.Label>Mobile Number</Form.Label>
  
    <Form.Control placeholder={driver.Phone_No} />
  </Form.Group>

  <Form.Group  className="mb-3" controlId="formLicense">
    <Form.Label>License No</Form.Label>
    <Form.Control placeholder={driver.Driving_License_No} disabled/>
  </Form.Group>

  <Row className="mb-3">
    {/* <Form.Group as={Col} controlId="formLicenseValidity">
      <Form.Label>License Valididty date</Form.Label>
      <DatePickerComponent placeholder="2031" disabled></DatePickerComponent>
                
    </Form.Group> */}

    {/* <Form.Group as={Col} controlId="formVehicleBrand">
      <Form.Label>Vehicle Brand</Form.Label>
      <Form.Control />
    </Form.Group>
    <Form.Group as={Col} controlId="formBrand">
      <Form.Label>Vehicle Brand</Form.Label>
      <Form.Control />
    </Form.Group> */}
  </Row>
{/* 
  <Form.Group className="mb-3" id="formModel">
      <Form.Label>Vehicle Model</Form.Label>
      <Form.Control placeholder={driver.VehicleType} disabled />
  </Form.Group> */}
  <Form.Group className="mb-3" id="formVehicleName">
      <Form.Label>Vehicle Name</Form.Label>
      <Form.Control placeholder={driver.VehicleType} disabled/>
  </Form.Group>
  <Form.Group className="mb-3" id="formCategory">
      <Form.Label>Vehicle Category</Form.Label>
      <Form.Control className="but" id="dropdown-button-dark-example1"  variant="secondary" title="online" placeholder={driver.type} disabled>
                    {/* <Dropdown.Item href="#/action-1">Open</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Close</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Any</Dropdown.Item> */}
        </Form.Control>
   </Form.Group>
   {/* <Form.Group className="mb-3" id="formVehicleColor">
      <Form.Label>Vehicle Colour</Form.Label>
      <Form.Control /> */}
   {/* </Form.Group> */}
   <Form.Group className="mb-3" id="formVehicleRegNum">
      <Form.Label>Vehicle registration number</Form.Label>
      <Form.Control placeholder ={driver.Vehicle_RC_Number} disabled/>
  </Form.Group>
  {/* <Form.Group className="mb-3" id="formVehiclePurchase">
      <Form.Label>Vehicle Purchase year</Form.Label>
      <Form.Control />
  </Form.Group> */}
  <Form.Group className="mb-3" id="formEmail">
      {/* <Form.Label>Email</Form.Label>
      <Form.Control /> */}
                    </Form.Group>
                    <Form.Group className="mb-3" id="formAddress">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder={`${driver.locality}, ${driver.city}`} disabled />
  </Form.Group>
  
                    
                    
           
</Form>
                
            </div> 
        </div>
    )
}

export default ProfileDetails