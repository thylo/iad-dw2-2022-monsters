import React from 'react';
import {Link} from "react-router-dom";

const Game = () => {

    return (
        <div className="c-app">
            <h1>This is the game. Have fun!</h1>
            <button onClick={(e) => e.preventDefault()}>
                <Link to={"/"}>Home</Link>
            </button>
        </div>
    );
};

export default Game;