export default function Section({ children, map }) {
	return (
		<section>
			<h2 className='text-white text-4xl pb-5'>{map}</h2>
			<div className='grid grid-cols-3'>{children}</div>
		</section>
	);
}
