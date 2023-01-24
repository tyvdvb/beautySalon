import { Card, Col, Pagination, Row } from 'antd';
import { useMemo, useState } from 'react';
import Meta from 'antd/es/card/Meta';
import './style.scss';

const PAGE_SIZE = 3;
export function PaginationStylists(props) {
	const [page, setPage] = useState(0);
	const displayedArray = useMemo(
		() => props.array.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
		[page]
	);

	console.log(props.array.length);
	console.log(page);
	return (
		<>
			<Row gutter={16} align={'stretch'}>
				{displayedArray.map((stylist, index) => {
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
			<Pagination
				page={page}
				onChange={(newPage) => setPage(newPage - 1)}
				pageSize={PAGE_SIZE}
				total={props.array.length}
				className="pagination"
			/>
		</>
	);
}
