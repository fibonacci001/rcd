import './styles.css'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);



    return ( <>
    <nav className={`navss container-fluid ${scrolled ? "scrolled" : ""}`}>
        <div className='innerdiv'>
            <Link className='logolink' to={'/'}>
        <h2 className='logo'>$TRUMPJET ✈</h2>
        </Link>
        <div className='menu1'><button className='miss'>MISSION</button> <button className='lead'>LEADERBOARD</button></div>
        <div>
          <Link className='logolink' to={'/coins'}>
          <button className='connect'>CONNECT WALLET</button>
          </Link>
          </div>
        </div>
    </nav>
    </> );
}
 
export default Nav;