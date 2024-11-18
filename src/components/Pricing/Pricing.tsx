import './Pricing.css';

export default function Pricing() {
	return (
		<div className="pricing">
			<div className="pricing-content wrapper">
				<h2>Cennik</h2>
				<p>
					Nasze ceny są bardzo przystępne. Zawsze powtarzamy, że zamiast oglądać
					film w kinie, lepiej przyjść do nas i samemu stać się częścią filmu za
					tę samą cenę. Doświadczysz różnicy!
				</p>
				<input type="checkbox" id="toggle" className="toggleCheckbox" />
				<label htmlFor="toggle" className="toggleContainer">
					<div>Poniedziałek - czwartek</div>
					<div>Weekendy i święta</div>
				</label>
			</div>
		</div>
	);
}
