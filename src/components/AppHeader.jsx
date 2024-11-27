import Navbar from '../pages/Navbar'

export default function AppHeader() {
	return (
		<header className='py-3 bg-dark mb-3'>
			<div className='container'>
				<div className='d-flex justify-content-between align-items-center'>
					<h1 className='text-center text-white'>React form</h1>
					<Navbar />
				</div>
			</div>
		</header>
	)
}
