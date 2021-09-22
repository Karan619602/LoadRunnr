import React,{Fragment,useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { allUsers } from '../actions/authactions'
import { MDBDataTable } from 'mdbreact'
import { DropdownButton, Dropdown,Button } from 'react-bootstrap'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import {Loader} from './loader.js'
import Modal from './Modal';

import './styles/dashboard.css'
import { Link } from 'react-router-dom'



const Dashboard=({match})=>{
    const dispatch= useDispatch();
   const {users,loading}=useSelector(state=>state.alluser)

    const userId = match.params.id;

  useEffect(()=>{ 
   
    dispatch(allUsers()) 
},[dispatch,userId])
//  const handler = (e,id) => {
//    //  e.preventDefault()
//     dispatch(getdriverDetails(id)) 
   
//  }
//  setTimeout((e,id) => {
//     handler(e,id)
//   }, 2000);
    const [pop, setpop] = useState(false);
    function off() {
        window.location.href = "./dashboard"; 
    }
    function st(){
        setpop(false);
        window.location.href = "./dashboard";
    }


const setdrivers = () => {
    const data = {
        columns: [
            {
                label: 'User ID',
                field: 'id',
                sort: 'asc'
            },
            {
                label: 'Status',
                field: 'Status',
                sort:'asc'
            },
            {
                label: 'Balance',
                field: 'Balance',
                sort:'asc'
            },
            {
                label: 'Online',
                field: 'Online',
                sort:'asc'
            },
            {
                label: 'Name',
                field: 'drivername',
                sort: 'asc'
            },
            {
                label: 'phone',
                field: 'Phone_No',
                sort: 'asc'
            },
            {
                label: 'vehicle type',
                field: 'vehicletype',
            },
            {
                label: ' type',
                field: 'type',
            },
            {
                label: 'Reffered By',
                field: 'RefferedBy',
                sort:'asc'
            },
            {
                label: 'Action',
                field: 'Action',
                sort:'asc'
            },
            {
                label: 'Orders',
                field: 'Ordeers',
                sort:'asc'
            },
            {
                label: 'Reviews',
                field: 'Reviews',
                sort:'asc'
            },
            {
                label: 'created By',
                field: 'createdBy',
                sort: 'asc'
            },
            {
                label: 'Registered on',
                field: 'RegisteredOn',
                sort: 'asc'
            }
        ],
        rows: []
    }
    users.forEach(user => {

        data.rows.push({

            id: user._id,
             Status: user.status,
            Balance:0,
            Online: user.online, 
            drivername: user.firstname ,
            Phone_No: user.Phone_No,
            vehicletype:user.VehicleType,
            type:user.type,
            createdBy:"App",
            RegisteredOn:user.createdAt,
            Action:
            <DropdownButton className="but" id="dropdown-button-dark-example1" variant="secondary" title="Actions">
             {/* <Dropdown.Item href="./verifyDocuments">Add & verify documents</Dropdown.Item> */}
            <Link to={`/admin/driver/vehicledetails/${user._id}`}> Add & verify documents</Link>
                    
             {/* <hr /> */}
             {/* <Link to="./trackDriver">Track Driver</Link> */}
             <hr />
             <Link to={`./walletLogs/${user._id}`}>View wallet logs</Link>
             {/* <hr />
             <Link to={`./updateProfile/${user._id}`}>Update profile</Link> */}
             <hr />
             {/* <Dropdown.Item href="./ProfileDetails">Detail Profile</Dropdown.Item> */}
             <Link to={`/admin/driver/details/${user._id}`}> Profile Details</Link>
<<<<<<< HEAD
             <hr />
             <Button onClick={() => { setpop(true) }} variant="primary" > Block !</Button>
=======
             
             <Button onClick={() => {setpop(true)}} variant="primary" > Block !</Button>
>>>>>>> 5e9ff0bfbef27bdff3d943f35f27c1896ad870d5
             <Modal open={pop} onClose={st} off={off} ></Modal>
            </DropdownButton>,
           
        })
    })

    return data;
}

    return (
    <Fragment>
          
          {loading ?<Loader/> : (
            <div className="col-12 col-md-10">
                <Fragment>
                    <h1 className="my-5">All Drivers</h1>
                    <div className="wrapper"> 
            <div className="constraints">
               <div className="tp"><span className="title">Status:</span>
                 <DropdownButton id="dropdown-button-dark-example1"  variant="secondary" title="All">
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Acitve</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Blocked</Dropdown.Item>
                </DropdownButton>
                </div>
                <div className="tp"><span className="title">Approved:</span> <DropdownButton className="but" id="dropdown-button-dark-example1"  variant="secondary" title="All">
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Approved</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Pending</Dropdown.Item>
                </DropdownButton>
                </div>
                <div className="tp"><span className="title">online:</span> <DropdownButton className="but" id="dropdown-button-dark-example1"  variant="secondary" title="online">
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">online</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">offline</Dropdown.Item>
                </DropdownButton>
                </div>
                <div className="tp"><span className="title">From Date:</span> 
                  <DatePickerComponent placeholder="Select Date"></DatePickerComponent>
                </div>
                <div className="tp"><span className="title">To Date:</span> 
                  <DatePickerComponent placeholder="Select Date"></DatePickerComponent>
                </div>
                
              
            </div>
                <div className="row2">
                          
                <Button variant="secondary" className="butt">Filter</Button>
                <Button variant="secondary" className="butt">Export to Excel </Button>
             
               </div>
                
            </div>
                    {/* {loading ?<Loader/> : ( */}
                        <MDBDataTable
                            data={setdrivers()}
                            className="px-3"
                            bordered
                            striped
                            hover
                        />
                    {/* )} */}

                </Fragment>
            </div>
      
      )}
    </Fragment>
)
}

export default Dashboard