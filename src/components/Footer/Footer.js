import './style.scss';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer>
			<div className="footer">
				<div className="navigation">
					<h4>CUSTOMER ASSISTANCE</h4>
					<ul>
						<li className="navLinkMenu">
							<NavLink to={'/about'} className="navMenu">
								About{' '}
							</NavLink>
						</li>
						<li className="navLinkMenu">
							<NavLink to={'/services'} className="navMenu">
								Services
							</NavLink>
						</li>
						<li className="navLinkMenu">
							<NavLink to={'/stylists'} className="navMenu">
								Stylists
							</NavLink>
						</li>
						<li className="navLinkMenu">
							<NavLink to={'/contact'} className="navMenu">
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="salonName">
					<fieldset className="salon"> Magni·fique</fieldset>
					<h5>SUBSCRIBE TO STYLE</h5>
					<Input
						className="userEmailInput"
						placeholder="email address"
						prefix={<UserOutlined />}
					/>
				</div>
				<div className="location" style={{ lineHeight: '2em' }}>
					48 South Audley Street, Mayfair, London <br />
					Tel: 020 7495 7774
					<br />
					Opening Times:
					<br />
					Monday (reception): 10am-4pm
					<br />
					Tuesday - Saturday: 8.30-6.00
					<br />
					Sunday: Closed
					<br />
				</div>
			</div>
		</footer>
	);
};
