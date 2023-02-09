import Navbar from './navigationBar';
import './style.scss'

export const Header = () => {
    return (
        <header>
            <a href={"/landing"} className="logo">
                Magni·fique
            </a>

                <Navbar/>

        </header>
    );
};

