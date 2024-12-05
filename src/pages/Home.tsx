import Navi from '../components/Navi.tsx';
import Header from '../components/Header.tsx'
import Main from '../components/Main.tsx'
import Footer from '../components/Footer.tsx'
import FAQ from '../components/FAQ/FAQ.tsx';
import Reservations from '../components/reservations/Reservations.tsx';

export default function Home() {
	return (
		<>
			<Navi></Navi>
			<Header></Header>
			<Main></Main>
			<Reservations/>
			<FAQ/>
			<Footer></Footer>
		</>
	);
}
