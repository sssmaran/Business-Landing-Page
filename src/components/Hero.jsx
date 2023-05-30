import React from "react";
import styled from "styled-components";
import explore from "../assets/explore.svg";
import "../App.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Container>
      <div className="text">
        <header>Bridging the gap between</header>
        <header>
          academia and industry<span className="dot">.</span>
        </header>
        <p>
          Join us in our mission to create a world where academia and industry
          work together <br />
          seamlessly, and innovation thrives.{" "}
        </p>
      </div>
      <div className="extra">
        <button className="contact">
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            duration={500}
          >
            CONTACT US
          </Link>
        </button>
        <img className="explore" src={explore} alt="" />
      </div>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  /* width: 70vw; */
  /* border-left: 5px solid #bdbdbd; */
  padding: 3.5rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0px 4px 10px 5px rgba(255, 255, 255, 0.25);
  border-radius: 30px 30px 130px 30px;
  margin: 3rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: 500;
  @media (max-width: 575px) {
    gap: 1rem;
    padding: 3rem;
    border-radius: 30px 30px 80px 30px;
  }
  .dot {
    color: darkblue;
  }
  p {
    color: #bdbdbd;
    font-size: 1.2rem;
  }
  header {
    font-size: 3.3rem;
    @media (max-width: 575px) {
      font-size: 2.5rem;
    }
  }
  button {
    cursor: pointer;
    font-size: 1rem;
    padding: 1.2rem 2rem 1.2rem 2rem;
    background: #d9d9d9;
    box-shadow: inset 5px -5px 5px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border: none;
    transform: matrix(1, 0.01, -0.02, 1, 0, 0);
    font-family: "Space Grotesk", sans-serif;
    font-weight: 500;
    align-self: flex-end;
    @media (max-width: 575px) {
      align-self: center;
    }
    @media (max-width: 575px) {
      font-size: 0.8rem;
    }

    @media (max-width: 768px) {
      /* margin-top: -3rem; */
      align-self: center;
    }
  }
  .extra {
    margin-top: -10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 575px) {
      margin-top: 3rem;
      /* align-items: center;
      justify-content: center; */
      img {
        margin: 0;
        width: 40%;
      }
    }
    @media (max-width: 1185px) {
      margin-top: -5rem;
    }
    @media (max-width: 768px) {
      margin-top: -1rem;
    }
  }
`;
