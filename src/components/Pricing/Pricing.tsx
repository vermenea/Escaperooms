import './Pricing.css';
import PriceBox from './PriceBox/PriceBox';
import Discount from './Discount/Discount';

import logo from '../../../public/img/ER-logo-icon.svg';

export default function Pricing() {
	return (
		<div className="pricing">
			<div className="pricing-content wrapper">
				<h2 className="pricing-content-header">Cennik</h2>
				<p className="pricing-content-text">
					Nasze ceny są bardzo przystępne. Zawsze powtarzamy, że zamiast oglądać
					film w kinie, lepiej przyjść do nas i samemu stać się częścią filmu za
					tę samą cenę. Doświadczysz różnicy!
				</p>
				<input type="checkbox" id="toggle" className="toggleCheckbox" />
				<label htmlFor="toggle" className="toggleContainer">
					<div>Poniedziałek - czwartek</div>
					<div>Weekendy i święta</div>
				</label>
				<div className="prices-container">
					<PriceBox
						playerNumber={2}
						pricePerPerson={49}
						pricePerRoom={98}
					></PriceBox>
					<PriceBox
						playerNumber={3}
						pricePerPerson={45}
						pricePerRoom={135}
					></PriceBox>
					<PriceBox
						playerNumber={4}
						pricePerPerson={39}
						pricePerRoom={156}
					></PriceBox>
					<PriceBox
						playerNumber={5}
						pricePerPerson={35}
						pricePerRoom={175}
					></PriceBox>
				</div>
				<p className="pricing-content-text">
					<span className="pricing-content-span">ZMIANA LICZBY GRACZY: </span>
					Przyjdzie więcej/mniej osób niż wpisałeś/aś w formularzu? Nie szkodzi,
					poza ceną biletu nic się nie zmieni i nie musisz nas o tym informować.
					Pamiętaj jednak, że w przypadku rezerwacji opłaconej z góry przelewem
					nie zwrócimy różnicy jeśli twoja dróżyna się zmniejszy.
				</p>
				<h2 className="pricing-content-header">Zniżki i promocje</h2>
				<div className="discountContainer">
					<Discount
						discountLogo={logo}
						discountHeading="Grupy szkolne"
						discountText="Od poniedziałku do czwartku, do godziny 16:00 cena dla grup szkolnych liczących minimum 15 graczy to 30 PLN od gracza."
					></Discount>
					<Discount
						discountLogo={logo}
						discountHeading="Grupy szkolne"
						discountText="Od poniedziałku do czwartku, do godziny 16:00 cena dla grup szkolnych liczących minimum 15 graczy to 30 PLN od gracza."
					></Discount>
					<Discount
						discountLogo={logo}
						discountHeading="Grupy szkolne"
						discountText="Od poniedziałku do czwartku, do godziny 16:00 cena dla grup szkolnych liczących minimum 15 graczy to 30 PLN od gracza."
					></Discount>
				</div>
			</div>
		</div>
	);
}
