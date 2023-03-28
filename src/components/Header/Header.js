import './Header.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);


  return (
    <div className="header">
      <Link className='header__logo' to="/">Math Magicians</Link>
      <ul className="header__nav-links">
        <li><Link className={url === '/' ? "header__nav-link__active" : ""} to="/">Home</Link></li>
        <li><Link className={url === '/calculator' ? "header__nav-link__active" : ""} to="/calculator">Calculator</Link></li>
        <li><Link className={url === '/quotes' ? "header__nav-link__active" : ""} to="/quotes">Quote</Link></li>
      </ul>
      
    </div>
  );
}

export default Header;
