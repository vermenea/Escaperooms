import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../public/img/ER-logo.svg';

export default function Header() {
	return (
		<header className="hero">
			<div className="wrapper hero-content">
				<img
					className="hero-logo"
					src={logo}
					alt="text logo with text escaperooms.pl"
				/>
				<h3 className="hero-text">Najszybsze 60min w twoim życiu</h3>

				<Link
					className="hero-link"
					to="../../"
				>
					Zarezerwuj dziś !
				</Link>
			</div>
		</header>
	);
}
