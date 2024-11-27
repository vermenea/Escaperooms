type DiscountProps = {
	discountLogo: string;
	discountHeading: string;
	discountText: string;
};

export default function Discount(props: DiscountProps) {
	return (
		<div className="discountBox">
			<div className="iconCircle">
				<img
					className="discountIcon"
					src={props.discountLogo}
					alt="discount icon"
				/>
			</div>
			<div>
				<h3 className="discountHeading">{props.discountHeading}</h3>
				<p className="discountDescription">{props.discountText}</p>
			</div>
		</div>
	);
}
