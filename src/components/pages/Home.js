import {Link} from "react-router-dom";

function Home() {

    return (
        <div className="c-app">
            <h1>Bienvenue, preux héros!</h1>
            <p>Tu entres maintenant dans le monde impardonnable de Embattled, où tes créations se batteront contre les
                abominations concues par ton adversaire.</p>
            <div className="c-button-wrapper">
                <button onClick={(e) => e.preventDefault()}>
                    <Link to={"/game"}>Start the game</Link>
                </button>
                <button onClick={(e) => e.preventDefault()}>
                    <Link to={"/monsters"}>Manage my characters</Link>
                </button>
            </div>
        </div>
    );
}

export default Home;
