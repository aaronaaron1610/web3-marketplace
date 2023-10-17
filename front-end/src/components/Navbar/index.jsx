import { useState } from 'react';
import { MenuData } from '../MenuData';
import './Navbar.css';
import { signInWithGoogle } from '../../config/firebase';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="logo">
        React <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <li>
          <button className="nav-links-mobile" onClick={signInWithGoogle}>
            Log In
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
