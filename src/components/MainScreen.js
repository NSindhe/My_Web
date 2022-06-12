import React from "react";
import { Container, Row } from "react-bootstrap";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container
        style={{
          marginTop: "2%",
        }}
      >
        <Row>
          <div className="page">
            {title && (
              <>
                <h4 className="heading">{title}</h4>
                <hr></hr>
                {children}
              </>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
