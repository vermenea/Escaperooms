import { Link } from 'react-router-dom';
import './Footer.css';

const links = [
	{ to: "/regulamin", label: "Regulamin" },
	{ to: "/nasze-pokoje", label: "Nasze pokoje" },
	{ to: "/rekrutacja", label: "Rekrutacja" },
	{ to: "/do-pobrania", label: "Do pobrania"},
	{ to: "/dla-szkol", label: "Dla szkół" },
	{ to: "/dla-firm", label: "Dla firm" },
	
]

export default function Main() {
	return (
		<>
			<footer>
				<div className="wrapper">
					<h1 className="footer-title">Skontaktuj się z nami !</h1>
					<div className="footer-containers">
						<div className="footer-box footer-box-left">
							<h3>Kontakt:</h3>
							<p>tel.:</p>
							<p>+48 739 094 852</p>
							<p>e-mail:</p>
							<p>kontakt@escaperooms.pl</p>
							<p>adres:</p>
							<div>
								<p>FUNARENA</p>
								<p>ul. Pokoleń Lechii Gdańsk 1</p>
								<p>80 - 560 Gdańsk</p>
							</div>
							<h3>Social media:</h3>
							<div className="footer-box-social">
								<a href="#">
									<img src="../../public/img/social_media/FB.svg" alt="" />
								</a>
								<a href="#">
									<img src="../../public/img/social_media/insta.svg" alt="" />
								</a>
								<a href="#">
									<img src="../../public/img/social_media/YT.svg" alt="" />
								</a>
							</div>
						</div>
						<div className="footer-box footer-box-mid">
							<h3>Linki:</h3>
							{links.map((link, index) => (
								<Link key={index} to={link.to} >{link.label}</Link>
							))}
								
							
						</div>
						<div className="footer-box footer-box-right">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4922.740379426511!2d18.640261266055514!3d54.38835271243183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd74a8e24db9eb%3A0x2dead5552d38c484!2sESCAPEROOMS!5e0!3m2!1sen!2spl!4v1731847072918!5m2!1sen!2spl"
								width="100%"
								height="100%"
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>
			</footer>
			<div className="small-footer">
				<p>
					Designed by: <a href="https://github.com/vermenea">Vermenea</a> &{' '}
					<a href="https://github.com/lukasRevol">Revol</a>
				</p>
			</div>
		</>
	);
}
