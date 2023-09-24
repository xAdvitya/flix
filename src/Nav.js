import React, { useEffect, useState } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';
function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  const navigate = useNavigate();
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__content">
        <img
          onClick={() => navigate('/')}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />

        <img
          onClick={() => navigate('/profile')}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
