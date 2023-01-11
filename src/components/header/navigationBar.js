import {navigationBarItems} from './navigationBarItems';
import {Dropdown, Space} from "antd";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <ul className="navs">
                {navigationBarItems.map((nav, index) => {
                     return nav.submenu ? (

                         <Dropdown menu={{ items : nav.submenu }} key = {index}>
                        <Link to={nav.url} className={"nav-items"} >
                            <Space>
                                {nav.title}
                            </Space>
                        </Link>
                    </Dropdown>
                     ) :   <Link to={nav.url}  key = {index} className={"nav-items"} >
                         <Space>
                             {nav.title}
                         </Space>
                     </Link>;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;