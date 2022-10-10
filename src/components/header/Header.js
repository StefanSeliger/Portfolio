import { NavLink } from "react-router-dom";

const Header = () => {
    let activeStyle = {
        fontWeight: "bold", color: "rgb(231,69,33)"
    };

    return (
        <header>
            <p className="nameLogo"><NavLink 
            exact to="/"
            style={({ isActive }) => isActive ? activeStyle : undefined}
            >stefan seliger</NavLink></p>
            <nav>
                <ul>
                    <li><NavLink 
                    to="/about" 
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                    >about</NavLink></li>
                    <li><NavLink 
                    to="/cv"
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                    >cv</NavLink></li>
                    <li><NavLink 
                    to="/portfolio"
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                    >portfolio</NavLink></li>
                    <li><NavLink 
                    to="/contact"
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                    >contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;