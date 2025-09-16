import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
export default function LandingPage() {

    const {setFormState,formState} = useContext(FormContext);
    const router = useNavigate();
    let token = localStorage.getItem("token");

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Meet Online</h2>
                </div>
                <div className='navlist'>
                    {token?<>
                    <div onClick={() => {
                                router("/home");
                            }} role='button'>
                                <p>Home</p>
                            </div>
                     
                            <div onClick={() => {
                                localStorage.removeItem("token");
                                router("/");
                            }} role='button'>
                                <p>Logout</p>
                            </div>
                            </>:<>
                            <p onClick={() => {
                                router("/home")
                            }}>Join as Guest</p>
                            <p onClick={() => {
                                setFormState(1);
                                router("/auth")

                            }}>Register</p>
                            <div onClick={() => {
                                setFormState(0);
                                router("/auth")

                            }} role='button'>
                                <p>Login</p>
                            </div></>}
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by Meet Online!</p>
                    <div role='button' style={{cursor:"pointer"}} onClick={()=>{
                        if(token){
                            router("/home")
                        }else{
                            router("/auth")
                        }
                    }}>Get Started</div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
            </div>



        </div>
    )
}