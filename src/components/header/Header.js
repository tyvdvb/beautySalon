import Navbar from './navigationBar';
import './style.css'

export const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <a href={"/"} className="logo">
                    Logo
                </a>
                <Navbar />
            </div>
        </header>
    );
};

