import './Navbar.css'
import { SiChinaeasternairlines } from "react-icons/si";
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import useAuth from '../useAuth';
import { UserContext } from '../UserProvider';

function Navbar() {
    const isLoggedIn = useAuth();
    const { getUsername, logout } = useContext(UserContext);
    const navigate = useNavigate();
    const username = getUsername();


    const LogoutButton = () => {
        logout();
        navigate('/');
    };
  return (
    <header class="bg-slate-800">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <SiChinaeasternairlines color='#e2e8f0' size={25}/>
                <div class="text-m font-semibold leading-6 text-slate-200 ml-1">Victor Travels</div>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <NavLink exact to="/" className="un link text-m font-semibold leading-6 text-slate-300">Homepage</NavLink>
                <NavLink to="/search" className="un link text-m font-semibold leading-6 text-slate-300">Search</NavLink>
                {isLoggedIn && <li><NavLink to="/cart" activeClassName="active">Cart</NavLink></li>}
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                {isLoggedIn ? (<div className="un text-m link font-semibold leading-6 text-slate-300">{username}<div onClick={LogoutButton}>Logout</div></div>):(<NavLink to="/login" className="un text-m link font-semibold leading-6 text-slate-300">Log in <span aria-hidden="true">&rarr;</span></NavLink>)}
            </div>
        </nav>
    </header>
  )
}

export default Navbar