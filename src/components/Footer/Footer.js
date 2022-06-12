import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "rebeccapurple",
        color: "#F6F6F6",
        borderTop: "1px solid #E7E7E7",
        padding: "20px",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
      }}
    >
      <Container>
        <FooterLinks>
          <div> Copyright &copy; Nitin S</div>
          <div>
            <a href="https://github.com/NSindhe">
              <FaGithub />
            </a>
            <a href="https://in.linkedin.com/in/nitinsindhe">
              <ImLinkedin style={{ marginLeft: "20px" }} />
            </a>
          </div>
        </FooterLinks>
      </Container>
    </div>
  );
};

export default Footer;
