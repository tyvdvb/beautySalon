import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import events from './events';
import './style.scss';
import { Modal } from 'antd';
import { Form, Input, Select, DatePicker } from 'antd';
import {
	HairCardsItems,
	MakeUpCardsItems,
	NailCardsItems,
	WaxCardsItems,
} from '../Services/CardsItems';
import {
	MakeupStylist,
	NailMaster,
	StylistHair,
	WaxMaster,
} from '../Stylists/Stylists';
import { useScrollTop } from '../../hooks/useScrollTop';

const allServives = HairCardsItems.concat(
	MakeUpCardsItems,
	NailCardsItems,
	WaxCardsItems
);

const allServivesNotGrouped = allServives.reduce((acc, curr) => {
	return acc.concat(curr.prices);
}, []);

const stylistsArrayByService = {
	['HAIR CUTS']: StylistHair,
	['HAIR COLORING']: StylistHair,
	['HAIR STYLING']: StylistHair,
	['TRADITIONAL BLONDING']: StylistHair,
	['MODERN BLONDING']: StylistHair,
	['HAIR PAINTING']: StylistHair,
	['HANDS & FEET CARE']: NailMaster,
	['ARTIFICIAL NAILS']: NailMaster,
	['NAILS POLISH CHANGE']: NailMaster,
	['BRIDAL MAKE-UP SERVICES']: MakeupStylist,
	['EVENING MAKEUP']: MakeupStylist,
	['NATURAL MAKEUP']: MakeupStylist,
	['PERMANENT MAKEUP']: MakeupStylist,
	['FACE']: WaxMaster,
	['UPPER BODY']: WaxMaster,
	['LOWER BODY']: WaxMaster,
};

const localizer = momentLocalizer(moment);
const CustomEvent = ({ event }) => {
	console.log(event);
	return (
		<div style={{ color: event.isMy ? 'yellow' : 'white' }}>{event.title}</div>
	);
};

export function MyCalendar() {
	useScrollTop();

	const [myEvents, setMyEvents] = useState(events);
	const [stylists, setStylists] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);

	const getNeededStylist = (serviceName) => {
		const group = allServives.find(
			(el) =>
				el.prices.filter((service) => service.label === serviceName).length > 0
		);
		if (group.title) {
			const stylistGroup = stylistsArrayByService[group.title];
			setStylists(stylistGroup);
		}
	};

	const handleSelectSlot = ({ start, end }) => {
		setIsModalOpen(true);
		setSelectedEvent({ id: myEvents.length + 1, start, end });
	};

	const handleCancel = () => {
		setIsModalOpen(false);
		setSelectedEvent({});
	};

	const handleSelectEvent = (event) => {
		setIsModalOpen(true);
		setSelectedEvent(event);
	};
	const selectedEventChanged = (changes) => {
		setSelectedEvent((current) => {
			return {
				...current,
				...changes,
			};
		});
	};

	const handleSubmit = () => {
		setMyEvents((currentEvents) =>
			currentEvents.concat([{ ...selectedEvent, isMy: true }])
		);
		handleCancel();
	};

	const selectedServiceObj = allServivesNotGrouped.find(
		(el) => el.label === selectedEvent.title
	);

	return (
		<div className="containerCalendar">
			<Modal
				title="Basic Modal"
				open={isModalOpen}
				onOk={handleSubmit}
				onCancel={handleCancel}
				onSelectSlot={handleSelectSlot}
			>
				<Form
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 14 }}
					layout="horizontal"
					style={{ maxWidth: 600 }}
				>
					<Form.Item label="Full name">
						<Input />
					</Form.Item>

					<Form.Item label="Procedure">
						<Select
							onSelect={(value) => {
								selectedEventChanged({ title: value });
								getNeededStylist(value);
							}}
							value={selectedEvent.title}
						>
							{allServives.map((el) => {
								return (
									<Select.OptGroup label={el.title} key={el.title}>
										{el.prices.map((service) => {
											return (
												<Select.Option
													value={service.label}
													key={`${el.title}-${service.label}`}
												>
													{service.label}
												</Select.Option>
											);
										})}
									</Select.OptGroup>
								);
							})}
						</Select>
					</Form.Item>

					<Form.Item label="Stylist">
						<Select
							disabled={!selectedEvent?.title}
							onSelect={(value) => selectedEventChanged({ stylist: value })}
							value={selectedEvent.stylist}
						>
							{stylists.map((stylist, index) => {
								return (
									<Select.Option
										value={stylist.name}
										key={`${stylist.name}-${index}`}
									>
										{stylist.name}
									</Select.Option>
								);
							})}
						</Select>
					</Form.Item>

					<Form.Item label="Date">
						<DatePicker
							showTime
							value={dayjs(selectedEvent.start)}
							format="DD-MM-YYYY HH:mm"
							disabled={!selectedEvent.stylist || !selectedEvent.title}
							disabledTime={(currentDate) => {
								return {
									disabledMinutes: () => {
										console.log(currentDate?.toDate().getHours());
										const selectedStylistsEvents = events.filter(
											(el) =>
												el.stylist === selectedEvent?.stylist &&
												el.start.getDate() ===
													currentDate?.toDate()?.getDate() &&
												el.start.getMonth() ===
													currentDate?.toDate()?.getMonth() &&
												el.start.getHours() <=
													currentDate?.toDate().getHours() &&
												el.end.getHours() >= currentDate?.toDate().getHours()
										);
										const minutesToBeDisabled = selectedStylistsEvents.reduce(
											(acc, curr) => {
												if (curr.start.getHours() === curr.end.getHours()) {
													let startMin = curr.start.getMinutes();
													let endMin = curr.end.getMinutes();
													while (startMin <= endMin) {
														acc.push(startMin);
														startMin++;
													}
													return acc;
												} else if (
													currentDate?.toDate().getHours() ===
														curr.start.getHours() &&
													currentDate?.toDate().getHours() < curr.end.getHours()
												) {
													let startMin = curr.start.getMinutes();
													let endMin = 60;

													while (startMin <= endMin) {
														acc.push(startMin);
														startMin++;
													}
													return acc;
												} else if (
													currentDate?.toDate().getHours() >
														curr.start.getHours() &&
													currentDate?.toDate().getHours() ===
														curr.end.getHours()
												) {
													let startMin = 0;
													let endMin = curr.end.getMinutes();
													while (startMin <= endMin) {
														acc.push(startMin);
														startMin++;
													}
													return acc;
												} else if (
													currentDate?.toDate().getHours() >
														curr.start.getHours() &&
													currentDate?.toDate().getHours() < curr.end.getHours()
												) {
													let startMin = 0;
													let endMin = 60;
													while (startMin <= endMin) {
														acc.push(startMin);
														startMin++;
													}
													return acc;
												}
												return acc;
											},
											[]
										);
										return [...new Set(minutesToBeDisabled)];
									},
									disabledHours: () => {
										const selectedStylistsEvents = events.filter(
											(el) =>
												el.stylist === selectedEvent?.stylist &&
												el.start.getDate() ===
													currentDate?.toDate()?.getDate() &&
												el.start.getMonth() ===
													currentDate?.toDate()?.getMonth()
										);
										if (
											selectedStylistsEvents.filter(
												(ev) =>
													ev.start.getTime() < currentDate?.valueOf() ||
													ev.end.getTime() > currentDate?.valueOf()
											).length > 0
										) {
											const hoursToBeDisabled = selectedStylistsEvents.reduce(
												(acc, curr) => {
													let start =
														curr.start.getMinutes() > 0
															? curr.start.getHours() + 1
															: curr.start.getHours();
													let end = curr.end.getHours();
													while (start < end) {
														acc.push(start);
														start++;
													}
													return acc;
												},
												[]
											);
											return [...new Set(hoursToBeDisabled)];
										}
									},

									// if(selectedStylistsEvents.filter((ev) => ev.start.getTime() < currentDate?.valueOf() || ev.end.getTime() > currentDate?.valueOf() ).length>0){
									//     return false;
									// }
									// return true;
								};
							}}
							onChange={(value) =>
								selectedEventChanged({
									start: value.toDate(),
									end: new Date(
										value.toDate().getTime() - selectedServiceObj.duration
									),
								})
							}
						/>
					</Form.Item>
				</Form>
			</Modal>

			<div className="bookingInfo">
				<h2 className="pageTitleBooking"> Book Appointment </h2>

				<hr className="horizontalLineBooking" />
				<p className="description">
					In order to provide the best experience possible for our clients, we
					ask that you use the following form to request an appointment. A
					member of our team will then be in contact with you shortly to
					schedule you in.
				</p>
				<p style={{ fontStyle: 'italic' }}>
					{' '}
					* you will see your booked appointments marked yellow in our calendar{' '}
				</p>
			</div>
			<div
				className="myCustomHeight"
				style={{ height: '600px', width: '100%', margin: '3% 0' }}
			>
				<Calendar
					selectable
					events={myEvents}
					localizer={localizer}
					onSelectEvent={handleSelectEvent}
					onSelectSlot={handleSelectSlot}
					components={{ event: CustomEvent }}
				/>
			</div>
		</div>
	);
}
