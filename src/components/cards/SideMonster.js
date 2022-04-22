﻿import MonsterCard from "./MonsterCard";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const fetchMonster = (monsterId) => {
    return axios.get(`http://localhost:8080/monsters/${monsterId}`)
}

const SideMonster = () => {

    const {monsterId} = useParams();
    const [monster, setMonster] = useState();
    useEffect(() => {
        fetchMonster(monsterId).then((response) => setMonster(response.data))
    }, [monsterId])

    if (!monster) return null;
    const {imageUrl} = monster;

    return (
        <div className="c-side-window" style={{"--bgImg": `url(${imageUrl})`}}>
            <button>Close</button>
            <MonsterCard monster={monster}/>
        </div>
    );
}

export default SideMonster;