import styles from './LandingPage.module.css';
import landingPage from '../../assests/landingpage.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div className={styles.landingPageWrapper}>
			<div className={styles.landingPageHeading}>
				<h1>
					Imagine if <span>Snapchat</span> had events.
				</h1>
				<p className={styles.landingPageParagraph}>
					Easily host and share events with your friends across any social media.
				</p>
			</div>
			<div className={styles.landingPageImage}>
				<img src={landingPage} alt='celebration' />
			</div>
			<div className={styles.landingPageButton}>
				<Link to='/create'>
					<button>🎉 Create my event</button>
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
