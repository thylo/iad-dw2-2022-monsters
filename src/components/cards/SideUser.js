import UserCard from "./UserCard";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideUser = () => {
    const navigate = useNavigate();
    const {userId} = useParams();
    
    return (
        <div className="c-side-window">
            <button onClick={()=>navigate("/list")}>Close</button>
            <UserCard userId={userId}/>
        </div>
    );
}

export default SideUser;