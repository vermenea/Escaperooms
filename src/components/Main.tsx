import Pricing from './Pricing/Pricing.tsx';
import './Main.css';
import FAQ from './FAQ/FAQ.tsx';
import Reservations from './reservations/Reservations.tsx';

export default function Main() {
  return (
    <>
      <Pricing></Pricing>
      <Reservations />
      <FAQ />
    </>
  );
}
