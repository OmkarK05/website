import React, { useContext } from 'react';
import styles from './Logo.module.scss';
import { portfolioContext } from '../../Context/context';
import { SET_DRAWER } from '../../Context/actionTypes';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../Images/logo1.svg';
function Logo() {
  const { state, dispatch } = useContext(portfolioContext);
  const [routes] = useState([
    { name: 'about-me', label: 'About me', id: '#about-me' },
    { name: 'experience', label: 'Experience', id: '#experience' },
    { name: 'skills', label: 'Skills', id: '#skills' },
    { name: 'projects', label: 'Work', id: '#projects' },
    { name: 'contact', label: 'Contact', id: '#contact' },
  ]);

  const handleClick = () => {
    dispatch({
      type: SET_DRAWER,
      payload: !state.drawer,
    });
  };

  return (
    <div className={styles['navbar-container']}>
      {window.innerWidth > 1024 ? (
        <div className={styles['desktop-navbar']}>
          <div style={{ 'padding-top': '10px' }}>
            <a href='#home'>
              <img alt='logo' src={logo} width='40' height='40'></img>
            </a>
          </div>
          <div className={styles['links-container']}>
            {routes.map((route) => (
              <div key={route['name']} className={styles.link}>
                <a href={route.id}>{route['label']}</a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.drawer}>
          <div>
            <a href='#home'>
              <img alt='logo' src={logo} width='35' height='35'></img>
            </a>
          </div>
          <div className={styles.crossContainer} onClick={handleClick}>
            <FaBars className='icon' size={25} />
          </div>
          <div
            style={{
              display: state.drawer ? 'block' : 'none',
            }}
            className={styles.sliderList}
          >
            <div className={styles.icon}>
              <FaTimes size={20} onClick={handleClick} />
            </div>
            <ul>
              {routes &&
                routes.map((route) => (
                  <li key={route['name']} onClick={handleClick}>
                    <a href={route.id}>{route['label']}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logo;
// <div className={styles.head}>
