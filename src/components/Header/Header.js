import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderName = styled.span`
  font-weight: 600;
  font-size: 25px;
  color: #fff;
`;

const Title = styled.span`
  padding-left: 20%;
`;

function Header() {
  const nav_color = {
    backgroundColor: "rebeccapurple",
    position: "sticky",
    top: "-1px",
  };

  return (
    <>
      <Navbar style={nav_color} variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <HeaderName>Nitin S</HeaderName>
            </Link>
            <Title>Web Developer</Title>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
