import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Links from './Links';
import { links, social } from '../Data';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (toggle) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [toggle]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src="/vite.svg" alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setToggle((prevToggle) => !prevToggle)}
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((item) => {
              const { id, url, text } = item;
              return <Links key={id} url={url} text={text} />;
            })}
          </ul>
        </div>

        {/*Due to the way we hide the nav links with height 0px, this was not a
        very good solution
        <div className={`links-container ${toggle ? 'show-container' : null}`}>
          <ul className="links">
            {links.map((item) => {
              const { id, url, text } = item;
              return <Links key={id} url={url} text={text} />;
            })}
          </ul>
        </div> */}
        <ul className="social-icons">
          {social.map((item) => {
            const { id, url, icon } = item;
            return <Links key={id} url={url} icon={icon} type={true} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
