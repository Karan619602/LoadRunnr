import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './styles/VerifyDocuments.css'
import  {Form,Row,Col,Card,Button} from 'react-bootstrap'
import { update } from '../actions/authactions'
import axios from 'axios'
import { useAlert } from 'react-alert'
// import EditSharp from '@mui/icons-material/EditSharp';
import { UPDATE_IMAGES_RESET } from '../constants/authconstants'


import { updateUser, getdriverDetails} from '../actions/authactions'

const  VerifyDocuments=({match,history})=> {

    const dispatch= useDispatch();
    const alert=useAlert()

    const {driver}=useSelector(state=>state.driverdetails)
    const {isUpdated}=useSelector(state=>state.updateimages)

    const driverId = match.params.id;
    const [obj,setobj]= useState({})

  useEffect(()=>{   
   
        
        
    dispatch(getdriverDetails(driverId)) 
    if(isUpdated){
      
        alert.success('Profile updated successfully')
        history.push('/dashboard')
         }

    dispatch({
        type:UPDATE_IMAGES_RESET
      })
},[dispatch,driverId,alert,isUpdated,history])


const handleimagechange=async (e)=>{
const formdata=new FormData()
if(e.target.name==='Profile_Photo'||e.target.name==='Passbook_Photo'||e.target.name==='Aadhar_Photo_Front'||e.target.name==='Aadhar_Photo_Back'||e.target.name==='PAN_Photo'||e.target.name==='RC_Photo'||e.target.name==='Driving_License_Photo'||e.target.name==='Vehicle_Front_Photo'||e.target.name==='Insurance_Photo'){
    formdata.append('images',e.target.files[0])
    const image= await axios.post('/api/admin/upload',formdata)
    
    console.log(e.target.files[0]);
    
    console.log("image",image.data)
      setobj({...obj,[e.target.name]:{url:image.data.path,filename:image.data.filename}})
    }
    else {
        if(e.target.value===''){
            var val=e.target.name
            console.log("val",val);
      setobj({...obj,[e.target.name]:driver.val})
        }
        else {
            setobj({...obj,[e.target.name]:e.target.value})
        }
  
    }
    
}



const onsubmithandler=(e)=>{
     e.preventDefault()
    console.log("objects",obj);
    
    dispatch(update(driver._id,obj))
}
const Onclick = (e,id) => {
    e.preventDefault();

    //   const formData = new FormData();
    
    //   formData.set('status', status);

      dispatch(updateUser(id, "Active"))
      history.push('/dashboard')
  }



   
    const [aadhar, setaadhar] = useState(false);
    const [pan, setpan] = useState(false);
    const [dl, setdl] = useState(false);
    const [rc, setrc] = useState(false);
    const [insure, setins] = useState(false);
    const [front, setfront] = useState(false);
    const [back, setback] = useState(false);
    const [vaccine, setvaccine] = useState(false);
    const [r1, setr1] = useState(true);
    const [r2, setr2] = useState(true);
    const [r3, setr3] = useState(true); 
    const [s1, sets1] = useState(true); 
    const [s2, sets2] = useState(true); 
    const [s3, sets3] = useState(true); 
    const [eaadhar, seteaadhar] = useState(true);
    const [epan, setepan] = useState(true);
    const [edl, setedl] = useState(true);
    const [erc, seterc] = useState(true);
    const [einsure, seteins] = useState(true);
  


    
    return (
        <Form onSubmit={onsubmithandler}>
    <div className="wrapper2">
          
            <div className="first">
                <div className="a">
                <img src={driver.Profile_Photo ? driver.Profile_Photo.url : ''} alt='png'></img>
                </div>
                <div className="b">
                    <div>
                      
                        <div className="wrap">
                     <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                        Driver ID : 
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" readOnly={s1} placeholder={driver._id}   onChange={(e)=>handleimagechange(e)}  />
                        </Col>
                     </Form.Group>
                     
                   
                   </div>
                   <div className="wrap">
                     <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                         Name  
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" readOnly={s2} name="firstname" placeholder={driver.firstname} onChange={(e)=>handleimagechange(e)}   />
                        </Col>
                     </Form.Group>
                     
                    <button type="button" className="bt" onClick={() => { sets2(!s2) }}>Edit </button>
                    
                   </div>
                   <div className="wrap">
                     <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                         Phone_No:
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" readOnly={s3} name="Phone_No" placeholder={driver.Phone_No}  onChange={(e)=>handleimagechange(e)}  />
                        </Col>
                     </Form.Group>
                     
                    <button type="button" className="bt" onClick={() => { sets3(!s3) }}>Edit </button>
                    
                   </div>
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
                     
                    <button type="button" className="bt" onClick={() => { setr1(!r1) }}>Edit </button>
                    
                   </div> */}
                                        {/* <div>Emergency Number:- {driver.Emergency_No} </div>   */}

                   
                  </div>
                </div>
                <div className="c"><ul><li className="driver">Vehicle number:-{driver.Vehicle_Number} </li> <li className="driver">Vehicle Type:-{driver.VehicleType} </li> <li className="driver">Vehicle Sub:- {driver.type}</li></ul></div>
            </div>
            <div className="second">
                <div className="a">
                    <img src={driver.Passbook_Photo?driver.Passbook_Photo.url:''}alt='png'></img>
                    {/* <input type="file" className="pt" name="Aadhar_Photo_Back" onChange={(e)=>handleimagechange(e)} ></input> */}
                </div>
                <div className="b">
                
                    <div className="wrap">
                     <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                        Account Number: 
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" readOnly={r1} name="Account_Number" placeholder={driver.Account_Number} onChange={(e)=>handleimagechange(e)}  />
                        </Col>
                     </Form.Group>
                     
                    <button type="button" className="bt" onClick={() => { setr1(!r1) }}>Edit </button>
                    
                   </div>
                    <div className="wrap">
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                        Bank Name: 
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" readOnly={r2} name="Bank_Name" placeholder={driver.Bank_Name} onChange={(e)=>handleimagechange(e)}  />
                        </Col>
                    </Form.Group>
                            <button type="button"  className="bt" onClick={() => { setr2(!r2) }}>Edit </button>
                    </div>
                    <div className="wrap">
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                        IFSC Code: 
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text"  readOnly={r3} name="IFSC_CODE" placeholder= {driver.IFSC_CODE} onChange={(e)=>handleimagechange(e)} />
                        </Col>
                            </Form.Group>
                            <button type="button"  className="bt" onClick={()=>{setr3(!r3)}}>Edit </button>
                    </div>
                   
                </div>
            </div>
            <div className="third">
                <div className="a">
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Aadhar Front</Card.Title>
                    <Card.Img variant="top" src={driver.Aadhar_Photo_Front?driver.Aadhar_Photo_Front.url:""} />
                    <Card.Body>
                        <Card.Text>
                        Document number : 
                        <textarea className="mk" rows="1" cols="20" name="Aadhar_No" readOnly={eaadhar} placeholder={driver.Aadhar_No}></textarea>    
                                <button type="button" className="btr" onClick={() => { seteaadhar(!eaadhar) }}>Edit </button>
                            </Card.Text>
                        <div className="ed">
                                <Button variant="light" onClick={()=>{setaadhar(!aadhar)}}> <div className="clr"> Upload</div></Button>
                                {aadhar?<input type="file" className="pt" name="Aadhar_Photo_Front" onChange={(e)=>handleimagechange(e)} ></input>:null}
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Aadhar Back</Card.Title>
                    <Card.Img variant="top" src={driver.Aadhar_Photo_Back?driver.Aadhar_Photo_Back.url:""} />
                    <Card.Body>
                    
                        <div className="ed">
                                <Button variant="light" onClick={()=>{setback(!back)}}> <div className="clr"> Upload</div></Button>
                                {back?<input type="file" className="pt" name="Aadhar_Photo_Back" onChange={(e)=>handleimagechange(e)} ></input>:null}
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Pan Card</Card.Title>
                    <Card.Img variant="top" src={driver.PAN_Photo?driver.PAN_Photo.url:''} />
                    <Card.Body>
                        <Card.Text>
                        Document number   : 
                      
                        <textarea className="mk" rows="1" cols="20" name="PAN_No" readOnly={epan} placeholder={driver.PAN_No}></textarea>    
                                <button type="button" className="btr" onClick={() => { setepan(!epan) }}>Edit </button>
                        </Card.Text>
                        
                        <div className="ed">
                                <Button variant="light" onClick={()=>{setpan(!pan)}}> <div className="clr"> Upload</div></Button>
                                {pan?<input type="file" className="pt" name="PAN_Photo" onChange={(e)=>handleimagechange(e)} ></input>:null}
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Driving License</Card.Title>
                    <Card.Img variant="top" src={driver.Driving_License_Photo?driver.Driving_License_Photo.url:''} />
                    <Card.Body>
                        <Card.Text>
                        Document number :
                        <textarea className="mk" rows="1" cols="20" name="Driving_License_No" readOnly={edl} placeholder={driver.Driving_License_No}></textarea>    
                                <button type="button" className="btr" onClick={() => { setedl(!edl) }}>Edit </button>
                            
                        </Card.Text>
                        <div className="ed">
                                <Button variant="light" onClick={()=>{setdl(!dl)}}> <div className="clr"> Upload</div></Button>
                                {dl?<input type="file" className="pt"  name="Driving_License_Photo" onChange={(e)=>handleimagechange(e)} ></input>:null}
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>RC</Card.Title>
                    <Card.Img variant="top" src={driver.RC_Photo?driver.RC_Photo.url:''} />
                    <Card.Body>
                        <Card.Text>
                        Document number   : 
                       
                        
                        <textarea className="mk" rows="1" cols="20" readOnly={erc} name="Vehicle_RC_Number" placeholder={driver.Vehicle_RC_Number}></textarea>    
                                <button type="button" className="btr" onClick={() => { seterc(!erc) }}>Edit </button>
                        </Card.Text>
                        <div className="ed">
                                <Button variant="light" onClick={()=>{setrc(!rc)}}> <div className="clr"> Upload</div></Button>
                                {rc?<input type="file" className="pt" name="RC_Photo" onChange={(e)=>handleimagechange(e)}  ></input>:null}
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div className="b">
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Insurance</Card.Title>
                    <Card.Img variant="top" src={driver.Insurance_Photo?driver.Insurance_Photo.url:''} />
                    <Card.Body>
                        <Card.Text>
                        Document number :
                        <textarea className="mk" rows="1" cols="20" name="Vehicle_Insurance_Number" readOnly={erc} placeholder= {driver.Vehicle_Insurance_Number}></textarea>    
                                <button type="button" className="btr" onClick={() => { seterc(!erc) }}>Edit </button>
                        <hr/>
                        Expiry Date:
                        <textarea className="mk" rows="1" cols="20" name="Insurance_Expiry_Date" readOnly={erc} placeholder={driver.Insurance_Expiry_Date}></textarea>    
                                <button type="button" className="btr" onClick={() => { seterc(!erc) }}>Edit </button>
                        </Card.Text>
                        <div className="ed">
                        <div className="but">
                                
                                <Button variant="light" onClick={() => { setins(!insure) }}> <div className="clr"> Upload</div></Button>
                                {insure?<input type="file" className="pt" name="Insurance_Photo" onChange={(e)=>handleimagechange(e)} ></input>:null}
                                </div>
                        </div>
                            
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Vehicle Front</Card.Title>
                    <Card.Img variant="top" src={driver.Vehicle_Front_Photo?driver.Vehicle_Front_Photo.url:''} />
                    <Card.Body>
                        {/* <Card.Text>
                        Document number : {driver.}
                        </Card.Text> */}
                        <div className="ed">
                                <Button variant="light" onClick={()=>{setfront(!front)}}> <div className="clr"> Upload</div></Button>
                                {front?<input type="file" className="pt" name="Vehicle_Front_Photo" onChange={(e)=>handleimagechange(e)} ></input>:null}
                        </div>
                    </Card.Body>
                </Card>
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Title>Vehicle Back</Card.Title>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Text>
                        Document number : {}
                        </Card.Text>
                        <div className="ed">
                                <Button variant="light" onClick={()=>{setback(!back)}}> <div className="clr"> Upload</div></Button>
                                {back?<input type="file"  className="pt"></input>:null}
                        </div>
                    </Card.Body>
                </Card> */}
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Title>Vaccine Certificate</Card.Title>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Text>
                        Document number : {}
                        </Card.Text>
                        <div className="ed">
                                <Button variant="light" onClick={()=>{setvaccine(!vaccine)}}> <div className="clr"> Upload</div></Button>
                                {vaccine?<input type="file" className="pt"></input>:null}
                        </div>
                    </Card.Body>
                    </Card>   */}
                </div>
                <div className="c">
                    <button className="btm1" onClick={(e)=>Onclick(e,driver._id)}>Approved</button>
                    <button className="btm2">Update</button>
                </div>
    
            </div>
           
    
        </div>
        </Form>
    )
}

export default VerifyDocuments
 