import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { HashLink } from 'react-router-hash-link';

// core components

function NoMatch() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("error-404");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("error-404");
    };
  });
  return (
    <>
      <div className="section">
        <Container>
          <Row>
          <Col md="7">
            <h2 className="pt-5">
              OOPS!<br />
              <p className="error-msg">
              We can't seem to find the page you're looking for. <br />
              <span className="mt-2" >
               <HashLink to="/about" className="btn btn-orange mt-2 text-center"><i className="fas fa-undo-alt"></i> Go Back</HashLink> </span> <br /><br />
              </p>
            </h2>
            </Col>
          </Row>
          <Row>
          <Col md="12">
            <div className="error-page">
          <img
                          className="img-fluid"
                          alt="..."
                          src={require("../../assets/images/error.svg").default}
                        />
            </div>
          </Col>
          </Row>
        </Container>
        </div>
    </>
  );
}

export default NoMatch;

