import { Link } from "react-router-dom"
import  "./Header.css"
import logo from "../../assets/images/logo.png"

import NavbarItem,{NavbarItemDropDown} from "../Container/NavbarItem/NavbarItem"

const Header = () => {
    return (

<nav className="navbar navbar-expand-lg navbar-dark cyborg-navbar"  data-bs-theme="dark">

  <div className="container-fluid">
    <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" />
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <ul className="navbar-nav">
        <NavbarItem className="nav-item " >
          <Link to="/" className="nav-link ">Home</Link>
        </NavbarItem>
        <NavbarItem className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </NavbarItem>
        <NavbarItemDropDown className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </NavbarItemDropDown>
        <NavbarItemDropDown className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </NavbarItemDropDown>
        <NavbarItemDropDown className="nav-item">
        <Link to="/profile" className="nav-link ">Profile</Link>
        </NavbarItemDropDown>
      </ul>
    </div>
  </div>
</nav>

    )
}
export default Header;