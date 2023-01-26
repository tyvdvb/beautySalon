import './style.scss'
import {Input} from "antd";
import { UserOutlined } from '@ant-design/icons';

export const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='navigation'>
                    <h4>CUSTOMER ASSISTANCE</h4>
                    <ul>
                        <li><a>About </a></li>
                        <li><a>Services</a></li>
                        <li><a>Stylists</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className='salonName'>
                    <fieldset className='salon'>Beauty Salon</fieldset>
                    <h5>SUBSCRIBE TO STYLE</h5>
                    <Input  className='userEmailInput' placeholder="email address" prefix={<UserOutlined />} />

                </div>
                <div className='location' style={{lineHeight: '2em'}}>
                        48 South Audley Street, Mayfair, London <br/>

                        Tel: 020 7495 7774<br/>

                        Opening Times:<br/>

                        Monday (reception): 10am-4pm<br/>

                        Tuesday - Saturday: 8.30-6.00<br/>

                        Sunday: Closed<br/>
                </div>
            </div>
        </footer>
    )

}