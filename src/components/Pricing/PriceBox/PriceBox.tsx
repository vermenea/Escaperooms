type PricingProps = {
	playerNumber: number;
	pricePerPerson: number;
	pricePerRoom: number;
};

export default function PriceBox(props: PricingProps) {
	return (
		<div className="priceBox">
			<div className="priceBoxPlayersNumber">
				<p>
					<span>{props.playerNumber} </span>Graczy w pokoju
				</p>
			</div>
			<div className="priceBoxPrice">
				<p className="pricePerPerson">{props.pricePerPerson}</p>
				<p className="text">PLN / osobę</p>
				<p className="priceSum">Łącznie {props.pricePerRoom} PLN</p>
			</div>
			<div className="priceBoxButton">
				<p>zarezerwuj teraz !</p>
			</div>
		</div>
	);
}
