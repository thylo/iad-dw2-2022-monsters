import React, {useState} from "react";
import UserCard from "./UserCard";
import Stat from "../data/Stat";

const MonsterCard = ({monster, onClick}) => {
    const {imageUrl, name, hit, health, created_by} = monster;

    return (
        <div className="c-monster-card" onClick={onClick}>
            <div className="c-monster-card__title">
                <h3>{name}</h3>
                <UserCard userId={created_by}/>
            </div>

            <div className="c-monster-card__img"/>
            <div className="c-monster-card__stats c-monster-card-stats">
                <Stat stat={hit} name="Hit"/>
                <Stat stat={health} name="Health"/>
                {/*<Stat stat={creator.name} name="Created by" invert={true}/>*/}
            </div>
        </div>
    );
}

export default MonsterCard;