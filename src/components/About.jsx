import React from "react";
import styled from "styled-components";
import image from "../assets/img1.png";

const About = () => {
  return (
    <Container name="about" id="About">
      <div className="about">
        <header>
          <span>SSSP INNOVATIVE RESEARCH</span>
          <br />
          <div className="about-part1">
            is an edTech organization with a vision to bridge the gap between
            academia & industry.
          </div>
          <br />
          <div className="about-part2">
            SSSP Innovative Research is in mission to build technology
            communities in academia to encourage students towards innovation &
            entrepreneurship. Since inception, we have trained thousands of
            students, faculty and working professionals on emerging technologies
            via technical bootcamps, hackathons, Summer & Winter Internship
            Programs.
          </div>
        </header>
        <p>
          Our outcomebased experiential learning programs on emerging
          technologies(IoT,AI/ML etc) are building skilledentry-level engineers,
          for the corporate world.
        </p>
      </div>
      <div className="image">
        <img src={image} width={480} height={300} alt="imgs" />
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 3rem;
  font-size: 1.2rem;
  color: #d9d9d9;
  @media (max-width: 575px) {
    text-align: center;
    flex-direction: column;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 1280px) {
    flex-direction: column;
  }
  span {
    font-size: 2rem;
    font-weight: 600;
  }

  header {
    padding-left: 1.2rem;
    @media (max-width: 575px) {
      padding-left: 0;
    }
  }
  .image {
    border-radius: 1rem;
    margin-right: 1.2rem;
    box-shadow: rgba(197, 197, 197, 0.736) 0px 30px 90px;
    @media (max-width: 575px) {
      margin: 0;
    }
    @media (max-width: 768px) {
      /* margin-top: -1rem; */
      margin: 0;
    }
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    margin-right: 10rem;
    line-height: 1.8;
    @media (max-width: 575px) {
      margin: 0;
    }
    @media (max-width: 1280px) {
      margin: 0;
    }
    @media (max-width: 768px) {
      margin: 0;
    }
    .about-part2 {
      border-left: 3px solid white;
      padding: 1rem;
    }
    @media (max-width: 575px) {
      .about {
        justify-content: center;
        align-items: center;
      }
      .about-part2 {
        border: none;
        font-size: 1.2rem;
      }
      .about-part1 {
        font-size: 1.2rem;
      }
    }
    @media (max-width: 768px) {
      /* margin-top: -1rem; */
      .about-part2 {
        border: none;
      }
    }
  }
  p {
    padding: 0 1rem;
    @media (max-width: 575px) {
      font-size: 1.2rem;
    }
  }
  .border {
    z-index: -99;
    position: absolute;
    margin-top: 2rem;
    margin-left: -2rem;
    width: 28rem;
    height: 18rem;
    border: 10px solid white;
    filter: blur(15px);
    img {
      position: absolute;
      top: 0;
      left: 0;
      @media (max-width: 575px) {
        border: 10px solid white;
        filter: blur(15px);
      }
    }
    @media (max-width: 575px) {
      margin: 0;
    }
    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;
