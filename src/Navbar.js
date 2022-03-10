import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { RiDashboardFill, RiMenuFill, RiCloseFill } from "react-icons/ri";

function Navbar() {

  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);


    return (
      <>
    <div className="md:hidden">
        <button
            className={`fixed right-3 pt-3 z-50 ${show && "text-white"}`}
            onClick={() => setShowMenu(!showMenu)}
        >
            {showMenu ? (<RiCloseFill size={24} />) : (<RiMenuFill size={24} />)}
        </button>
    </div>

    <div className={`nav ${show && "navblack"} navb position fixed top-0 w-full h-16 p-5 h-6 flex justify-between z-40`}>
          <img
            className="nav__logo absolute left-8 w-20 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
          <nav id="nav" className="hidden md:block">
            <ul>
              <li className="current-menu-item"><a href="/" className="link">Acceuil</a></li>
              <li><a href="/Projects" className="link">Projets</a></li>
              <li><a href="#" className="link">Skills</a></li>
              <li><a href="#" className="link">Design</a></li>
              <li><a href="#" className="link">Contact</a></li>
            </ul>
          </nav>
          <img
          className="nav__gi fixed right-16 w-8 object-contain"
          src="https://img.icons8.com/plumpy/64/ffffff/github.png"
          alt="Avatar"
          />
          <img
            className="nav__i fixed right-5 w-8 object-contain"
            src="https://img.icons8.com/plumpy/64/ffffff/linkedin-circled--v1.png"
            alt="Avatar"
          />{/**/}

    </div>

          {showMenu && (<div id="navMob" className="fixed block md:hidden right-3 mt-10 text-white flex justify-center items-center z-50">
            <img
              className="small_netflix_logo absolute left-5 top-5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/800px-Netflix_2015_N_logo.svg.png"
              alt="Netflix Logo"
            />
            <nav>
            <ul>
              <li className="current-menu-itemMob"><a href="/" className="linkMob pb-5">Acceuil</a></li>
              <li><a href="/Projects" className="linkMob pb-5">Projets</a></li>
              <li><a href="#" className="linkMob pb-5">Skills</a></li>
              <li><a href="#" className="linkMob pb-5">Design</a></li>
              <li><a href="#" className="linkMob pb-0">Contact</a></li>
            </ul>
          </nav>
          </div>)}
      </>
    );
  }
  
  export default Navbar;