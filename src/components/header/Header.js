import Navbar from './navigationBar';
import {Link} from "react-router-dom";
import './style.css'

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link to={"/"} className="logo">
                    Logo
                </Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;