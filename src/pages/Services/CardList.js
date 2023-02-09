import { Card, Col, Row } from 'antd';

export function CardListOddElements(props) {
	return (
		<Row gutter={16} align="stretch">
			{props.array.map((services, index) => {
				return (
					<Col md={8} xs={24} key={index}>
						<Card
							title={services.title}
							bordered={true}
							style={{
								textAlign: 'center',
								position: 'relative',
								height: '100%',
							}}
						>
							{services.prices?.map((description, index) => (
								<Row
									key={index}
									justify="space-between"
									style={{ padding: '10px' }}
								>
									<span>{description.label}</span>
									<span>{description.price}</span>
								</Row>
							))}
						</Card>
					</Col>
				);
			})}
		</Row>
	);
}

export function CardListEvenElements(props) {
	return (
		<Row gutter={16} align={'stretch'}>
			{props.array.map((services, index) => {
				return (
					<Col md={12} xs={24} key={index}>
						<Card
							title={services.title}
							bordered={true}
							style={{
								textAlign: 'center',
								marginBottom: '20px',
								position: 'relative',
								height: '100%',
							}}
						>
							{services.prices?.map((description, index) => (
								<Row
									key={index}
									justify="space-between"
									style={{ padding: '10px' }}
								>
									<span>{description.label}</span>
									<span>{description.price}</span>
								</Row>
							))}
						</Card>
					</Col>
				);
			})}
		</Row>
	);
}
