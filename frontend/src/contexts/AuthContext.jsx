import axios from "axios";
import httpStatus from "http-status";
import { useState } from "react";
import { createContext,useContext } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment.js";

export const AuthContext = createContext({});

const cilent = axios.create({
    baseURL: server
});

export const AuthProvider = ({children})=>{
    const authContext = useContext(AuthContext);

    const [userData,setUserData] = useState(authContext);

    const router = useNavigate();

    const handleRegister = async(name,username,password)=>{
        try{
            let request = await cilent.post("/register",{
                name:name,
                username:username,
                password:password
            });

            if(request.status === httpStatus.CREATED){
                return request.data.message;
            }
        }catch(err){
            throw err;
        }
    };

    const handleLogin = async(username,password)=>{
        try{
            let request = await cilent.post("/login",{
                username:username,
                password:password
            });

            if(request.status === httpStatus.OK){
                localStorage.setItem("token",request.data.token);
                router("/home");
            }
        }catch(err){
            throw err;
        }
    };
    
    const getHistoryOfUser = async()=>{
        try{
            let request = await cilent.get("get_all_activity",{
                params:{
                    token: localStorage.getItem("token")
                }
            });

            return request.data
        }catch(e){
            throw e;
        }
    };

    const addToUserHistory = async(meetingCode)=>{
        try{
            let request = await cilent.post("add_to_activity",{
                token: localStorage.getItem("token"),
                meeting_code:meetingCode
            });

            return request;
        }catch(e){
            throw e;
        }
    }

    

    const data = {userData,setUserData,handleRegister,handleLogin, getHistoryOfUser,addToUserHistory};

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}