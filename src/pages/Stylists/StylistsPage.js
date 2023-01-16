import React from 'react';
import './style.scss';
import { Card, Col, Row } from 'antd';
import { MakeupStylist, NailMaster, StylistHair, WaxMaster } from './Stylists';
const { Meta } = Card;

export const StylistsPage = () => {
	return (
		<div>
			<img
				src={
					'https://elledecor.in/wp-content/uploads/2021/01/HORIZONTAL-2-11.jpg'
				}
				style={{
					height: '500px',
					width: ' 100%',
					opacity: '0.7',
					filter: 'blur(1px)',
				}}
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
					<Col span={8}></Col>
					<Col span={16}>
						<Row gutter={16} align={'stretch'}>
							{StylistHair.map((stylist, index) => {
								return (
									<Col span={6} key={index}>
										<Card
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
												paddingBottom: '100px',
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
				<Row gutter={16}>
					{NailMaster.map((stylist, index) => {
						return (
							<Col span={6} key={index}>
								<Card
									hoverable
									cover={
										<img
											alt="example"
											src={stylist.img}
											style={{ height: '400px' }}
										/>
									}
								>
									<Meta title={stylist.name} description={stylist.services} />
									<button
										style={{
											backgroundColor: 'white',
											height: '40px',
											width: '100%',
											marginTop: '20px',
										}}
									>
										BOOK APPOINTMENT
									</button>
								</Card>
							</Col>
						);
					})}
				</Row>
			</div>

			<hr style={{ margin: '70px' }} />

			<div className="stylist">
				<Row gutter={16}>
					{MakeupStylist.map((stylist, index) => {
						return (
							<Col span={6} key={index}>
								<Card
									hoverable
									cover={
										<img
											alt="example"
											src={stylist.img}
											style={{ height: '400px' }}
										/>
									}
								>
									<Meta title={stylist.name} description={stylist.services} />
									<button
										style={{
											backgroundColor: 'white',
											height: '40px',
											width: '100%',
											marginTop: '20px',
										}}
									>
										BOOK APPOINTMENT
									</button>
								</Card>
							</Col>
						);
					})}
				</Row>
			</div>

			<hr style={{ margin: '70px' }} />

			<div className="stylist">
				<Row gutter={16} align={'stretch'}>
					{WaxMaster.map((stylist, index) => {
						return (
							<Col span={6} key={index}>
								<Card
									hoverable
									cover={
										<img
											alt="example"
											src={stylist.img}
											style={{ height: '400px' }}
										/>
									}
								>
									<Meta title={stylist.name} description={stylist.services} />
									<button
										style={{
											backgroundColor: 'white',
											height: '40px',
											width: '100%',
											marginTop: '20px',
										}}
									>
										BOOK APPOINTMENT
									</button>
								</Card>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
};
