import React, { useContext, useState } from 'react'
// import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid";
import RestoreIcon from '@mui/icons-material/Restore';
import { Button, IconButton, TextField } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';
import { FormContext } from '../contexts/FormContext';
import "../App.css";

function Home() {

    let navigate= useNavigate();
    const [meetingCode,setMeetingCode] = useState("");
    const token = localStorage.getItem("token");
    const {addToUserHistory} = useContext(AuthContext);
    const {setFormState,formState} = useContext(FormContext);
    let handelJoinVideoCall = async()=>{
        if(token && token.length == 40){
            await addToUserHistory(meetingCode)
        };
        navigate(`/${meetingCode}`);
    }
  return (
    <>
        <div className='navBar'>
                <div style={{display:"flex", alignItems:"center"}}>
                    <h2>Meet Online</h2>
                </div>
                {token ?<div style={{display:"flex", alignItems:"center",paddingTop:"0.5rem"}}>
                    <Button className='btn' variant="contained" size="small" onClick={async()=>{
                        let meetingCode = uuid().slice(0,7);
                        await addToUserHistory(meetingCode);
                        navigate(`/${meetingCode}`);
                    }}>create+</Button>
                    &nbsp;&nbsp;
                    <p className='btn' style={{cursor:"pointer"}} onClick={()=>{navigate("/history")}}>
                        {/* <IconButton >
                            <RestoreIcon/>
                        </IconButton> */}
                        History
                    </p>
                    &nbsp;
                    <Button className='btn' onClick={()=>{
                        localStorage.removeItem("token");
                        navigate("/auth")
                    }}>
                        Logout
                    </Button>
                    
                </div>:
                <div style={{display:"flex", alignItems:"center" , paddingTop:"0.5rem"}}>
                    <Button className='btn' variant="contained" size="small" onClick={()=>{
                        setFormState(1);
                        navigate("/auth")
                    }}>Register</Button>
                    &nbsp;
                    <Button className='btn' variant="outlined" size="small" onClick={()=>{
                        setFormState(0);
                        navigate("/auth")
                        }}>Login</Button>
                </div>}
        </div>

        <div className='meetContainer'>
              <div className='leftPanel'>
                    <div>
                            <h1>Connect, Collaborate, Communicate!</h1><br/>
                            <div style={{display:"flex",gap:"10px"}}>
                                <TextField onChange={(e)=>{setMeetingCode(e.target.value)}} id='outlined-basic' label="Meeting Code" variant="outlined"></TextField>
                                <Button variant='contained' onClick={handelJoinVideoCall}>Join</Button>
                            </div>
                    </div>
              </div>  
              <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt=''></img>
              </div>
        </div>
    </>
  )
}

export default Home;