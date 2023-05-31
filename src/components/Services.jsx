import React from "react";
import styled from "styled-components";
import "../App.css";

const Services = () => {
  return (
    <Container name="services">
      <Title>Services</Title>
      <div className="services">
        <div className="service">Technology Bootcamps</div>
        <div className="service">Virtual Internships Programs</div>
        <div className="service">Career Readiness Programs</div>
        <div className="service">Summer Practice Schools</div>
        <div className="service">Hands-on Training Programs</div>
        <div className="service">Professional Development Programs</div>
        <div className="service">Hackathons</div>
        <div className="service">
          R&D services(Publishing patents, research articles)
        </div>
        <div className="service_info">
          <p className="part-1">
            Ever since the inception, we have shown high end captive results to
            many young graduates in achieving their goals.
          </p>
          <p className="part-2">
            Our end goals are simple, Fresh graduates should be adequately
            equipped in terms of skill and confidence before setting sails to
            their dream careers with the corporates to achieve their Dreams.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  padding: 0 5rem 5rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 575px) {
    img {
      width: 20;
      height: 20;
    }
    .part-1,
    .part-2 {
      margin-top: 1rem;
      margin: 1rem 0 0 0;
    }
  }
  img {
    padding: 2rem;
  }
  .services {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .service {
    margin: 1rem;
    padding: 1rem;
    background: rgba(43, 77, 164, 0.46);
    border-radius: 30px;
  }
  p {
    margin: 2rem;
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3.3rem;
  color: transparent;
  -webkit-text-stroke: 1px white;
`;
