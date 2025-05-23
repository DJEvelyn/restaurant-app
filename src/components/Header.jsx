import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarCSS>
      <div className="navbar-container">
        <div className="logo-section">
          <li>
            <Link to="/" onClick={toggleMenu}>
              <img src={logo} alt="logo" />
            </Link>
          </li>
        </div>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={isOpen ? "active" : ""}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/booking" onClick={toggleMenu}>
                Book a Table
              </Link>
            </li>{" "}
            {/* Change from '/book' to '/booking' */}
            <li>
              <Link to="/order" onClick={toggleMenu}>
                Order
              </Link>
            </li>
            <li>
              <Link to="/feedback" onClick={toggleMenu}>
              Feedback
              </Link>
            </li>
            <li>
              <Link to="/checkout" onClick={toggleMenu}>
                <i className="fas fa-shopping-cart"></i> Checkout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </NavBarCSS>
  );
}

export default NavBar;

const NavBarCSS = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    background-color: #73A19E;
    color: #FAF9F6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Ensures header is above all other content */
    
    .navbar-container {
        width: 100%;
        height: 100%;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .logo-section {
        flex: 1;
    }
    
    .logo-section img {
        height: 5rem;
        width: auto;
        border-radius: 3%;
    }
    
    .hamburger {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
        cursor: pointer;
        z-index: 1010; /* Higher than the navbar */
        position: relative;
    }
    
    .hamburger span {
        display: block;
        height: 3px;
        width: 100%;
        background-color: #002d2c;
        border-radius: 3px;
        transition: all 0.3s ease;
        position: absolute;
        transform-origin: center;
    }
    
    .hamburger span:first-child {
        top: 0;
    }
    
    .hamburger span:nth-child(2) {
        top: 9px;
    }
    
    .hamburger span:last-child {
        top: 18px;
    }
    
    /* X animation when menu is active */
    .hamburger.active span:first-child {
        transform: translateY(9px) rotate(45deg);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:last-child {
        transform: translateY(-9px) rotate(-45deg);
    }
    
    nav {
        margin-right: 3rem;
        flex: 2;
    }
    
    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin: 0;
        padding: 0;
    }
    
    li {
        list-style: none;
        margin-left: 3rem;
    }
    
    a {
        text-decoration: none;
        font-weight: 500;
        font-size: 1.1rem;
        transition: color 0.3s ease, font-size 0.3s ease; /* Add transition for color and font size */
    }
    
    a:hover {
        color: #FF7F50; /* Change color on hover */
    }
    
    @media (max-width: 768px) {

        width: 100vw;

        .hamburger {
            display: flex;
            margin-right: 1rem;
        }
        
        nav {
            position: fixed;
            top: 6rem;
            right: -100%;
            width: 70%;
            height: calc(100vh - 6rem);
            background-color: #edf0f0;
            margin: 0;
            padding: 2rem 0;
            transition: all 0.5s ease;
            box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
            z-index: 990; /* Lower than navbar but above other content */
        }
        
        nav.active {
            right: 0;
        }
        
        ul {
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
        
        li {
            margin: 1.5rem 0;
        }

        a {
            color: #002d2c;
            transition: color 0.3s ease, font-size 0.3s ease; /* Ensure mobile links also have transition */
        }

        a:hover {
            color: #FF7F50; /* Change color on hover for mobile */
        }
    }
`;

