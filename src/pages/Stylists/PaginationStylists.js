import { Col, Pagination, Row } from 'antd';
import {  useState } from 'react';
import './style.scss';
import {StylistCard} from "./StylistCard";

const PAGE_SIZE = 3;
export function PaginationStylists(props) {
	const [page, setPage] = useState(0);
	const displayedArray = props.array.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);


	console.log(props.array.length);
	return (
		<>
			<Row gutter={16} align={'stretch'}>
				{displayedArray.map((stylist, index) => {
					return (
						<Col lg={8} xs={24} sm={12} key={index}>
							<StylistCard stylist={stylist}/>
						</Col>
					);
				})}
			</Row>
			{ displayedArray.length>0 &&
				<Pagination
					page={page}
					onChange={(newPage) => setPage(newPage - 1)}
					pageSize={PAGE_SIZE}
					total={props.array.length}
					className="pagination"
				/>
			}
		</>
	);
}
