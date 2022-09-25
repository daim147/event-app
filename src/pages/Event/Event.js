import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';
import styles from './Event.module.css';
const Event = ({ eventData }) => {
	console.log(eventData);
	return (
		<div className={styles.eventWrapper}>
			<div className={styles.eventImage}>
				<img src={eventData.image} alt='' />
			</div>
			<div className={styles.eventWrapperContent}>
				<h1 className={styles.eventName}>{eventData.eventName}</h1>
				<p className={styles.eventHost}>
					Hosted By <span>{eventData.hostName}</span>
				</p>
				<div className={styles.eventDetail}>
					<div className={styles.eventDetailIcon}>
						<CalendarMonthIcon />
					</div>
					<div className={styles.eventDetailText}>
						<div>{moment(eventData.startTime).format('DD MMMM LT')}</div>
						<div>
							to <span>{moment(eventData.endTime).format('DD MMMM LT')}</span>
						</div>
					</div>
					<div className={styles.eventIcon}>
						<ChevronRightIcon />
					</div>
				</div>
				<div className={styles.eventDetail}>
					<div className={styles.eventDetailIcon}>
						<LocationOnIcon />
					</div>
					<div className={styles.eventDetailText}>
						<div>{eventData.streetName}</div>
						<div>
							{eventData.city}, {eventData.state}, {eventData.postCode}
						</div>
					</div>
					<div className={styles.eventIcon}>
						<ChevronRightIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Event;
