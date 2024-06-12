import Section from './components/Section';
import { MAPS } from './components/MAPS';

function App() {
	return (
		<>
			<Section map='Crypts'>
				<img
					src={MAPS.Crypts.crypts1}
					alt='crypts1normal'
					className='size-11/12'
				/>
				<img
					src={MAPS.Crypts.crypts2}
					alt='crypts2normal'
					className='size-11/12'
				/>
				<img
					src={MAPS.Crypts.crypts3}
					alt='crypts3normal'
					className='size-11/12'
				/>
				<img
					src={MAPS.Crypts.crypts4}
					alt='crypts4normal'
					className='size-11/12'
				/>
				<img
					src={MAPS.Crypts.crypts5}
					alt='crypts5normal'
					className='size-11/12'
				/>
				<img
					src={MAPS.Crypts.crypts6}
					alt='crypts6normal'
					className='size-11/12'
				/>
			</Section>
			<Section map='Crypts Inferno'>
				<img src={MAPS.CryptsHR.HR1} alt='cryptsInferno1' className='size-11/12' />
				<img src={MAPS.CryptsHR.HR2} alt='cryptsInferno2' className='size-11/12' />
				<img src={MAPS.CryptsHR.HR3} alt='cryptsInferno3' className='size-11/12' />
			</Section>
		</>
	);
}

export default App;
