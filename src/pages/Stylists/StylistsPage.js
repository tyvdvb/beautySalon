import React from 'react';
import './style.scss';
import { Card, Col, Row } from 'antd';
import { MakeupStylist, NailMaster, StylistHair, WaxMaster } from './Stylists';
const { Meta } = Card;

export const StylistsPage = () => {
	return (
		<div>
			<img
				className={'pageImg'}
				src={
					'https://elledecor.in/wp-content/uploads/2021/01/HORIZONTAL-2-11.jpg'
				}
			/>
			<div className="titleText">
				<h2 style={{ margin: '20px' }}>OUR TEAM</h2>
				<p>
					It’s our delight to provide a comfortable and friendly environment for
					our guests. Say hello to the team that makes it possible!
				</p>
			</div>
			<div className="stylist">
				<Row>
					<Col xs={24} md={8}>
						<div>
							<h2 style={{ left: '150px' }}>Master Hair Specialists</h2>
							<hr style={{ marginTop: '10px' }} />
							<p className="teamDescription">
								Meet the best hair stylists in Toronto – ready to provide you
								with the look you want, the care you need, and the
								professionalism you expect. With a team of expert colourist,
								stylists at your convenience in the hear of Toronto, we can
								guarantee that you&#39;ll find the right match for your style
								and desired service. Learn more about each of our experienced
								team members here.
							</p>
						</div>
					</Col>
					<Col xs={24} md={16}>
						<Row gutter={16} align={'stretch'}>
							{StylistHair.map((stylist, index) => {
								return (
									<Col lg={8} xs={24} sm={12} key={index}>
										<Card
											className="stylistCard"
											hoverable
											cover={
												<img
													className="imgStylist"
													alt="example"
													src={stylist.img}
													style={{ height: '400px' }}
												/>
											}
											style={{
												height: '100%',
												position: 'relative',
												paddingBottom: '50px',
											}}
										>
											<Meta
												title={stylist.name}
												description={stylist.services}
											/>
											<button
												style={{
													backgroundColor: 'white',
													height: '40px',
													width: '100%',
													position: 'absolute',
													bottom: '10px',
													left: '0px',
												}}
											>
												BOOK APPOINTMENT
											</button>
										</Card>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</div>

			<hr style={{ margin: '70px' }} />

			<div className="stylist">
				<Row>
					<Col xs={24} md={8}>
						<div>
							<h2 style={{ left: '150px' }}>Master Nail Specialists</h2>
							<hr style={{ marginTop: '10px' }} />
							<p className="teamDescription">
								Meet the best hair stylists in Toronto – ready to provide you
								with the look you want, the care you need, and the
								professionalism you expect. With a team of expert colourist,
								stylists at your convenience in the hear of Toronto, we can
								guarantee that you&#39;ll find the right match for your style
								and desired service. Learn more about each of our experienced
								team members here.
							</p>
						</div>
					</Col>
					<Col xs={24} md={16}>
						<Row gutter={16} align={'stretch'}>
							{NailMaster.map((stylist, index) => {
								return (
									<Col lg={8} xs={24} sm={12} key={index}>
										<Card
											className="stylistCard"
											hoverable
											cover={
												<img
													alt="example"
													src={stylist.img}
													style={{ height: '400px' }}
												/>
											}
											style={{
												height: '100%',
												position: 'relative',
												paddingBottom: '50px',
											}}
										>
											<Meta
												title={stylist.name}
												description={stylist.services}
											/>
											<button
												style={{
													backgroundColor: 'white',
													height: '40px',
													width: '100%',
													position: 'absolute',
													bottom: '10px',
													left: '0px',
												}}
											>
												BOOK APPOINTMENT
											</button>
										</Card>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</div>

			<hr style={{ margin: '70px' }} />

			<div className="stylist">
				<Row>
					<Col xs={24} md={8}>
						<div>
							<h2 style={{ left: '150px' }}>Master MakeUp Specialists</h2>
							<hr style={{ marginTop: '10px' }} />
							<p className="teamDescription">
								Meet the best hair stylists in Toronto – ready to provide you
								with the look you want, the care you need, and the
								professionalism you expect. With a team of expert colourist,
								stylists at your convenience in the hear of Toronto, we can
								guarantee that you&#39;ll find the right match for your style
								and desired service. Learn more about each of our experienced
								team members here.
							</p>
						</div>
					</Col>
					<Col xs={24} md={16}>
						<Row gutter={16} align={'stretch'}>
							{MakeupStylist.map((stylist, index) => {
								return (
									<Col lg={8} xs={24} sm={12} key={index}>
										<Card
											className="stylistCard"
											hoverable
											cover={
												<img
													alt="example"
													src={stylist.img}
													style={{ height: '400px' }}
												/>
											}
											style={{
												height: '100%',
												position: 'relative',
												paddingBottom: '50px',
											}}
										>
											<Meta
												title={stylist.name}
												description={stylist.services}
											/>
											<button
												style={{
													backgroundColor: 'white',
													height: '40px',
													width: '100%',
													position: 'absolute',
													bottom: '10px',
													left: '0px',
												}}
											>
												BOOK APPOINTMENT
											</button>
										</Card>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</div>

			<hr style={{ margin: '70px' }} />

			<div className="stylist">
				<Row>
					<Col xs={24} md={8}>
						<div>
							<h2 style={{ left: '150px' }}>Master Wax Specialists</h2>
							<hr style={{ marginTop: '10px' }} />
							<p className="teamDescription">
								Meet the best hair stylists in Toronto – ready to provide you
								with the look you want, the care you need, and the
								professionalism you expect. With a team of expert colourist,
								stylists at your convenience in the hear of Toronto, we can
								guarantee that you&#39;ll find the right match for your style
								and desired service. Learn more about each of our experienced
								team members here.
							</p>
						</div>
					</Col>
					<Col xs={24} md={16}>
						<Row gutter={16} align={'stretch'}>
							{WaxMaster.map((stylist, index) => {
								return (
									<Col lg={8} xs={24} sm={12} key={index}>
										<Card
											className="stylistCard"
											hoverable
											cover={
												<img
													alt="example"
													src={stylist.img}
													style={{ height: '400px' }}
												/>
											}
											style={{
												height: '100%',
												position: 'relative',
												paddingBottom: '50px',
											}}
										>
											<Meta
												title={stylist.name}
												description={stylist.services}
											/>
											<button
												style={{
													backgroundColor: 'white',
													height: '40px',
													width: '100%',
													position: 'absolute',
													bottom: '10px',
													left: '0px',
												}}
											>
												BOOK APPOINTMENT
											</button>
										</Card>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
};
