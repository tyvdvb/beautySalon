import { Col, Row } from 'antd';
import {StylistCard} from "./StylistCard";


export function StylistsList(props) {

	return (
		<Row gutter={16} align={'stretch'}>
			{props.array.map((stylist, index) => {
				return (
					<Col lg={8} xs={24} sm={12} key={index}>
						<StylistCard stylist={stylist}/>
					</Col>
				);
			})}
		</Row>
	);
}
