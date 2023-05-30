import React from "react";
import styled from "styled-components";

const Objectives = () => {
  return (
    <Container name="objectives">
      <Title>Objectives</Title>
      <div className="elements">
        <div className="element">
          <p>
            Well directed career guidance programs for educational institutions.
          </p>
        </div>
        <div className="element">
          <p>Appropriate certification courses that suit the industry need.</p>
        </div>
        <div className="element">
          <p>Specialized incubation centers in collaboration with corporate.</p>
        </div>
        <div className="element">
          <p> Establish technology development centers in colleges</p>
        </div>
        <div className="element">
          <p>
            Train the trainers: expanded awareness about the current industry
            standards.
          </p>
        </div>
        <div className="info">
          Our skill development programs are designed considering the present
          expectations in the industry. We thereby work along the lines to offer
          best programs in IoT Hyderabad.
        </div>
        <div className="team">
          <h2>Core team</h2>
          <div className="team-memb">
            <div className="memb">
              <span>Dr.D.Shanthi</span>{" "}
              <div>Postdoc(USA), PhD Founder & CEO</div>
            </div>
            <div className="memb">
              <span> Ch. Prasada Rao</span> <div>Co-Founder</div>{" "}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Objectives;

const Container = styled.div`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  .team {
    margin: 2rem;
    text-align: center;
    h2 {
      @media (max-width: 575px) {
        font-size: 2rem;
      }
    }

    span {
      font-weight: 800;
      @media (max-width: 575px) {
        font-size: 1.5rem;
      }
    }
    font-weight: 100;
    font-size: 1.8rem;
    .memb {
      line-height: 1.5;
      border-radius: 1rem;
      padding: 2rem;
      margin: 1rem;
      background: rgba(131, 129, 136, 0.363);
      div {
        font-size: 1rem;
      }
    }
    .team-memb {
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 575px) {
        flex-direction: column;
      }
      @media (max-width: 778px) {
        flex-direction: column;
      }
    }
  }
  .elements {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .element {
    width: 200px;
    height: 200px;
    margin: 1rem;
    padding: 1rem;
    background: rgba(16, 8, 113, 0.72);
    box-shadow: inset 0px 4px 20px 5px rgba(255, 255, 255, 0.25);
    border-radius: 30px;
    text-align: center;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .element p {
    padding: 0 1rem;
  }
  .info {
    font-size: 1.2rem;
    margin: 5rem 10rem 2rem 10rem;
    font-weight: 400;
    text-align: center;
    line-height: 2;
    @media (max-width: 575px) {
      padding-top: 1rem;
      margin: 0;
    }
    @media (max-width: 778px) {
      padding-top: 1rem;
      margin: 0;
    }
  }
  .internship {
    font-size: 1.2rem;
    text-align: center;
    line-height: 2;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3.3rem;
  color: transparent;
  -webkit-text-stroke: 1px white;
`;
