import {Link, Outlet} from "react-router-dom";

function Layout(props) {

    return (
        <div className="c-app">
            <nav className="c-nav">
                <Link to={"/"}>Home</Link>
                <Link to={"/game"}>Game</Link>
                <Link to={"/monsters"}>Characters</Link>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;