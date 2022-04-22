import React, {useEffect, useState} from 'react';
import MonsterCard from "../cards/MonsterCard";
import axios from "axios";
import {Outlet, useNavigate} from "react-router-dom";

const fetchMonsters = async () => {
    return axios.get("http://localhost:8080/monsters")
}
const Monsters = ({navToScene}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [monsters, setMonsters] = useState(null);
    const [error, setError] = useState(null);
    const navigateToPage = useNavigate();

    useEffect(() => {
        fetchMonsters().then(response => {
            console.log(response);
            setMonsters(response.data);
            setIsLoading(false);
        }).catch(e => {
            setIsLoading(false);
            setError("Error");
        })
    }, [])

    if (isLoading) {
        return <div>Loading</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="c-app__h">
            <div>
                <h1>Your monsters</h1>
                <p>These are your monsters, your own spawns, your <b>creations</b>.</p>
            </div>
            <ul className="c-monster-grid">
                {monsters.map((m) => {
                    return (
                        <li key={m.id} className="c-monster-grid__item" style={{"--bgImg": `url(${m.imageUrl})`}}>
                            <MonsterCard monster={m} onClick={() => {
                                navigateToPage(m.id.toString());
                            }}/>
                        </li>
                    )
                })}
            </ul>
            <Outlet/>
            {/*<SideMonster monster={selectedMonster} setSelectedMonster={setSelectedMonster} setSelectedUser={setSelectedUser}/>
            <SideUser created_by={selectedUser} setSelectedUser={setSelectedUser}/>*/}
        </div>
    );
};

export default Monsters;