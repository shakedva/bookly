import { Link, NavLink } from 'react-router-dom';
import './MainNavigation.css';
export default function MainNavigation() {
    return (
        <header className='main-header'>
            <h1 className='main-navigation__title'>
                <Link to='/'>Bookly</Link>
            </h1>
            <nav className='main-navigation__header-nav'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/library">My Library</NavLink></li>
                    <li><NavLink to="/library/new">New</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}