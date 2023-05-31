import React from "react";
import styled from "styled-components";
import scan from "../assets/scan.png";

const Footer = () => {
  return (
    <Container name="footer">
      <div className="name">
        SSSP INNOVATIVE RESEARCH LLP{" "}
        <a href="mailto:prasadraochoudari@gmail.com">
          prasadaraochoudari@gmail.com
        </a>
      </div>
      <div className="register">
        For registration, please scan the QR Code
        <img src={scan} alt="" srcset="" width={150} height={150} />
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background: rgba(217, 217, 217, 0.12);
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  @media (max-width: 775px) {
    flex-direction: column;
    gap: 1rem;
  }
  .name {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #d9d9d9;
  }

  a {
    color: #d9d9d9;
  }
  .register {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 1rem;
    color: #d9d9d9;
    @media (max-width: 775px) {
      flex-direction: column-reverse;
    }

    img {
      mix-blend-mode: multiply;
    }
  }
`;
