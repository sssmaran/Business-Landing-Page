import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import menu from "../assets/menu.svg";
import { useState } from "react";
import close from "../assets/close.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    console.log("Success");
    setNav(!nav);
  };
  return (
    <Content>
      {/* <Logo to="#"> */}
      <Navleft>
        <img src={logo} alt="Logo" width={50} height={60} />
        <header className="logo_name">
          <span>SSSP</span>
          <p>RESEARCH INNOVATIVE LLP</p>
        </header>
      </Navleft>
      <Navright className={nav ? "nav_links active" : "mobile-nav"}>
        <Links className="link" href="/">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </Links>
        <Links className="link" href="/">
          <Link
            activeClass="active"
            to="objectives"
            spy={true}
            smooth={true}
            duration={500}
          >
            Objectives
          </Link>
        </Links>
        <Links className="link" href="/">
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            duration={500}
          >
            Services
          </Link>
        </Links>
      </Navright>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <img className="menu" src={menu} alt="" width={30} height={30} />
        ) : (
          <img className="close" src={close} alt="" width={25} height={25} />
        )}
      </div>
    </Content>
  );
};

export default Navbar;

const Content = styled.div`
  .active {
    top: 120px;
  }
  margin: 2rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "Space Grotesk", sans-serif;
  @media (max-width: 575px) {
    margin: 1rem 0 0 0;
  }
  .hamburger {
    display: none;
    margin-left: 1rem;
    @media (max-width: 775px) {
      display: block;
    }
  }
`;
const Links = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
`;
const Navleft = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    font-size: 1rem;
    font-weight: 100;
  }

  gap: 1rem;
  span {
    font-size: 2.8rem;
    font-weight: 600;
    text-shadow: 2.5px 2px 0 #676767;
  }
`;
const Navright = styled.div`
  margin-right: 2rem;
  display: flex;
  gap: 5rem;
  @media (max-width: 575px) {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: -100vh;
    left: 0;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    background-color: #000000fb;
    transition: 0.3s;
  }
  @media (max-width: 775px) {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: -100vh;
    left: 0;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    transition: 0.4s;
  }

  .link:hover {
    border-bottom: 1px solid white;
    @media (max-width: 575px) {
      font-size: 1.2rem;
    }
  }
`;
