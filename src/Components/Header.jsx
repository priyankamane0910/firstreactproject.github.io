import React from 'react'
import{HashLink} from 'react-router-hash-link';

const Header = () => {
  return (
  <nav>
    <h1>Cricket</h1>
    <main>
        <HashLink to={"/#homepage"}>Home</HashLink>
        <HashLink to={"/contact"}>Contact</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <HashLink to={"/teams"}>Teams</HashLink>
       
    </main>
  </nav>
  );
}

export default Header;
