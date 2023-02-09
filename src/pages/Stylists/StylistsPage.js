import React, {useState} from 'react';
import './style.scss';
import {Col, Row, Input, Select} from 'antd';
import { MakeupStylist, NailMaster, StylistHair, WaxMaster } from './Stylists';
import { StylistsList } from './StylistsList';
import { PaginationStylists } from './PaginationStylists';
import {useScrollTop} from "../../hooks/useScrollTop";

export const StylistsPage = () => {
	useScrollTop();
	const [searchFilter, setSearchFilter] = useState("");
	const [sexFilter, setSexFilter] = useState("");
	const [ageSort, setAgeSort] = useState("asc");


	const handleFilters = (stylist) =>{
		let result = stylist;
		if (searchFilter){
			const regex = new RegExp(searchFilter,'ig');
			result = result.filter((el) => regex.test(el.name) )
		}
		if (sexFilter){
			result = result.filter((el) => el.sex === sexFilter )
		}
	    result = result.sort((a,b) =>{
			if( ageSort === 'asc'){
				return a.age - b.age;
			}
			else{
				return b.age - a.age ;
			}
		});

		return result;

	}
	return (
		<div>
			<div style={{position: 'relative'}}>
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
			<div className='searchInput'>
				<Input.Search value={searchFilter} placeholder='Please enter stylist name'  onChange={({target})=>{
					setSearchFilter(target.value);
				}}
				/>
			</div>
				<div className='selects'>
				<Select

					showSearch
					value={sexFilter}
					placeholder="Select a stylist's sex"
					onSelect={(value)=>{
						setSexFilter(value);
					}}
					filterOption={(input, option) =>
						(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
					}
					options={[
						{
							value: '',
							label: 'All',
						},
						{
							value: 'female',
							label: 'Female',
						},
						{
							value: 'male',
							label: 'Male',
						},

					]}
				/>

				<Select
					showSearch
					value={ageSort}
					placeholder="Sort stylists age"
					onSelect={(value)=>{
						setAgeSort(value);
					}}
					filterOption={(input, option) =>
						(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
					}
					options={[
						{
							value: 'dsc',
							label: ' Age: 60 - 19',
						},
						{
							value: 'asc',
							label: 'Age: 19 - 60',
						},
					]}
				/>
				</div>

			</div>
			<div className="stylist">
				<Row>
					<Col xs={24} md={8}>
						<div>
							<h2 style={{ left: '150px', fontFamily: 'Playfair Display SC, serif' }}>Master Hair Specialists</h2>
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
						<PaginationStylists array={handleFilters(StylistHair)} />
					</Col>
				</Row>
			</div>

			<hr style={{ margin: '70px' }} />

			<div className="stylist">
				<Row>
					<Col xs={24} md={8}>
						<div>
							<h2 style={{ left: '150px', fontFamily: 'Playfair Display SC, serif'  }}>Master Nail Specialists</h2>
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
						<StylistsList array={handleFilters(NailMaster)} />
					</Col>
				</Row>
			</div>

			<hr style={{ margin: '70px' }} />

			<div className="stylist">
				<Row>
					<Col xs={24} md={8}>
						<div>
							<h2 style={{ left: '150px', fontFamily: 'Playfair Display SC, serif'  }}>Master MakeUp Specialists</h2>
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
						<StylistsList array={handleFilters(MakeupStylist)} />
					</Col>
				</Row>
			</div>

			<hr style={{ margin: '70px' }} />

			<div className="stylist">
				<Row>
					<Col xs={24} md={8}>
						<div>
							<h2 style={{ left: '150px', fontFamily: 'Playfair Display SC, serif'  }}>Master Wax Specialists</h2>
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
						<StylistsList array={handleFilters(WaxMaster)} />
					</Col>
				</Row>
			</div>
		</div>
	);
};
