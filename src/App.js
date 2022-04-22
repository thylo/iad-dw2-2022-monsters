import './App.scss';

import Home from "./components/pages/Home";
import Game from "./components/pages/Game";
import Monsters from "./components/pages/Monsters";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"
import SideMonster from "./components/cards/SideMonster";
import SideUser from "./components/cards/SideUser";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="game" element={<Game/>}/>
                <Route path="monsters" element={<Monsters/>}>
                    <Route path="monster/:monsterId" element={<SideMonster/>}/>
                    <Route path="user/:userId" element={<SideUser/>}/>
                </Route>
            </Route>
        </Routes>
    )

    /*const stateResult = useState("monsters");
    const currentScreen = stateResult[0];
    const changeCurrentState = stateResult[1];

    const navigate = (nextScene) => {
        changeCurrentState(nextScene);
    }

    switch (currentScreen) {
        case "game":
            return <Game navToScene={navigate}/>
        case "monsters":
            return <Monsters navToScene={navigate}/>
        case "home":
        default:
            return <Home navToScene={navigate}/>
    }*/
}

export default App;