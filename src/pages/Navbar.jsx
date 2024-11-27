import { NavLink } from 'react-router-dom'
export default function Navbar() {
	return (
		<nav className='d-flex gap-3'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/about'>Chi Siamo</NavLink>
			<NavLink to='/posts'>Posts</NavLink>
		</nav>
	)
}
