import React, {useEffect, useState} from "react";
import UserCard from "./UserCard";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import MonsterCard from "./MonsterCard";

const fetchCreated = async (userId) => {
    return axios.get(`http://localhost:8080/monsters/?created_by=${userId}`)
}

const SideUser = () => {

    const navigate = useNavigate();
    const {userId} = useParams();
    const [created, setCreated] = useState();
    useEffect(() => {
        fetchCreated(userId).then((response) => setCreated(response.data))
    }, [userId])

    if (!userId || !created) return null;

    return (
        <div className="c-side-window">
            <button onClick={() => navigate("/monsters")}>Close
            </button>
            <UserCard userId={userId}/>
            <ul className="c-monster-grid c-monster-grid--vertical">
                {created.map((c) => {
                    return (
                        <li key={c.id} className="c-monster-grid__item" style={{"--bgImg": `url(${c.imageUrl})`}}>
                            <button onClick={() => {
                                navigate(`/monsters/monster/${c.id.toString()}`);
                            }}>{c.name}</button>
                            {/*<MonsterCard monster={c} onClick={() => {
                                navigate(`/monsters/monster/${c.id.toString()}`);
                            }}/>*/}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default SideUser;