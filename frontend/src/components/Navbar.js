import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'; 
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const location = useLocation();
    const history = useHistory();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        setLoggedIn(false);
        setUserName('');
        closeMobileMenu();
        history.push('/login');
    };

    useEffect(() => {
      showButton();
      window.addEventListener('resize', showButton);
      return () => window.removeEventListener('resize', showButton);
    }, []);

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      const savedUser = localStorage.getItem('authUser');
      setLoggedIn(Boolean(token));
      setUserName(savedUser ? JSON.parse(savedUser).name : '');
    }, [location]);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className='fab fa-typo3'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={`nav-menu ${click ? 'active' : ''}`}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>
                        {loggedIn ? (
                          <>
                            <li className='nav-item'>
                              <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                {userName ? `Hi, ${userName}` : 'Profile'}
                              </Link>
                            </li>
                            <li className='nav-item'>
                              <button className='nav-links logout-button' onClick={() => { handleLogout(); }}>
                                Logout
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li className='nav-item'>
                              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>Login</Link>
                            </li>
                            <li className='nav-item'>
                              <Link to='/register' className='nav-links-mobile' onClick={closeMobileMenu}>Register</Link>
                            </li>
                          </>
                        )}
                    </ul>
                    {button && !loggedIn && <Button buttonStyle='btn--outline' to='/register'>REGISTER</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar

