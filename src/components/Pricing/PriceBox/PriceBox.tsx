import './PriceBox.css'

type PricingProps = {
    playerNumber: number,
    pricePerPerson: number,
    pricePerRoom: number,
}

export default function PriceBox(props: PricingProps) {
    return (
        <div>
            <p>liczba gracy: {props.playerNumber}</p>
            <p>cena za osobę: {props.pricePerPerson}</p>
            <p>cena za pokój: {props.pricePerRoom}</p>
        </div>
    )
}