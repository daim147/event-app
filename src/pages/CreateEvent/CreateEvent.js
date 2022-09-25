import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import styles from './CreateEvent.module.css';
import { useState } from 'react';
import { OutlinedInput, Snackbar } from '@mui/material';
import { useHistory } from 'react-router-dom';
const CreateEvent = ({ sendEventData }) => {
	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
	const [eventData, setEventData] = useState({
		eventName: '',
		hostName: '',
		streetName: '',
		city: '',
		state: '',
		postCode: '',
		startTime: null,
		endTime: null,
		image: '',
	});
	const history = useHistory();
	console.log(eventData);

	const handleUpload = () => {
		let isValidFormData = true;
		Object.keys(eventData).forEach((key) => {
			if (!eventData[key]) {
				setIsSnackbarOpen(true);
				isValidFormData = false;
			}
		});
		if (isValidFormData) {
			sendEventData(eventData);
			history.push('/event');
		}
	};

	return (
		<div className={styles.createEventWrapper}>
			<div className={styles.createEventHeading}>
				<h1>
					Let's create <span>amazing Event</span> for you.
				</h1>
			</div>

			<TextField
				value={eventData.eventName}
				onChange={(e) => setEventData((prev) => ({ ...prev, eventName: e.target.value }))}
				label='Event Name'
				variant='outlined'
			/>
			<TextField
				value={eventData.hostName}
				onChange={(e) => setEventData((prev) => ({ ...prev, hostName: e.target.value }))}
				label='Host Name'
				variant='outlined'
			/>
			<TextField
				value={eventData.streetName}
				onChange={(e) => setEventData((prev) => ({ ...prev, streetName: e.target.value }))}
				label='Street Name'
				variant='outlined'
			/>
			<TextField
				value={eventData.city}
				onChange={(e) => setEventData((prev) => ({ ...prev, city: e.target.value }))}
				label='City'
				variant='outlined'
			/>
			<TextField
				value={eventData.state}
				onChange={(e) => setEventData((prev) => ({ ...prev, state: e.target.value }))}
				label='State'
				variant='outlined'
			/>

			<TextField
				value={eventData.postCode}
				onChange={(e) => setEventData((prev) => ({ ...prev, postCode: e.target.value }))}
				label='Postcode'
				type='number'
				variant='outlined'
			/>

			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DateTimePicker
					renderInput={(props) => <TextField {...props} />}
					label='Start time/date'
					value={eventData.startTime}
					disablePast
					onChange={(newValue) =>
						setEventData((prev) => ({ ...prev, startTime: newValue.valueOf() }))
					}
				/>
				<DateTimePicker
					renderInput={(props) => <TextField {...props} />}
					label='End time/date'
					value={eventData.endTime}
					disablePast
					onChange={(newValue) =>
						setEventData((prev) => ({ ...prev, endTime: newValue.valueOf() }))
					}
				/>
			</LocalizationProvider>
			<OutlinedInput
				accept='image/*'
				id='contained-button-file'
				multiple
				type='file'
				variant='outlined'
				onChange={(event) => {
					const file = event.target.files[0];
					const reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onloadend = () => {
						setEventData((prev) => ({ ...prev, image: reader.result }));
					};
				}}
			/>
			<div className={styles.createEventButton}>
				<button onClick={handleUpload}>Upload</button>
			</div>
			<Snackbar
				open={isSnackbarOpen}
				onClose={() => setIsSnackbarOpen(false)}
				autoHideDuration={2000}
				message='Please fill all the fields'
			></Snackbar>
		</div>
	);
};

export default CreateEvent;
