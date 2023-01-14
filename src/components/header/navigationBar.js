import {navigationBarItems} from './navigationBarItems';
import {Dropdown, Space} from "antd";

const Navbar = () => {

    return (
        <nav>
            <ul className="navs">
                {navigationBarItems.map((nav, index) => {
                     return nav.submenu ? (

                         <Dropdown menu={{ items : nav.submenu }} key = {index}>
                        <a href={nav.url} className={"nav-items"} >
                            <Space>
                                {nav.title}
                            </Space>
                        </a>
                    </Dropdown>
                     ) :   <a href={nav.url}  key = {index} className={"nav-items"} >
                         <Space>
                             {nav.title}
                         </Space>
                     </a>;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;