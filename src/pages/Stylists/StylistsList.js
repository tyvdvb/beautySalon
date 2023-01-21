import { Card, Col, Row } from 'antd';
const { Meta } = Card;

export function StylistsList(props) {
	return (
		<Row gutter={16} align={'stretch'}>
			{props.array.map((stylist, index) => {
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
						>
							<Meta title={stylist.name} description={stylist.services} />
							<button className="bookBtn">BOOK APPOINTMENT</button>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
}
