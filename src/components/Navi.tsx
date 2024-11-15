import { Link } from 'react-router-dom';
import './Navi.css';

export default function Navi() {
	return (
		<nav className="nav">
			<div className="navigation wrapper">
				<img className="logo" src="../../img/logo.png" alt="logo escaperooms" />
				<div>
					<Link className="navigation-link" to="#">
						Rooms
					</Link>
					<Link className="navigation-link" to="#">
						Prices
					</Link>
					<Link className="navigation-link" to="#">
						FAQ
					</Link>
					<Link className="navigation-link" to="#">
						For schools
					</Link>
					<Link className="navigation-link" to="#">
						For groups
					</Link>
					<Link className="navigation-link" to="#">
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
