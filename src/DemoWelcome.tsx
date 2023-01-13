// DemoWelcome ---------------------------------------------------------------

// Demo welcome page.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Internal Modules ---------------------------------------------------------

import DemoSidebar from "./DemoSidebar";

// Component Details --------------------------------------------------------

const DemoWelcome = () => {

    return (
        <Container fluid="md" id="DemoWelcome">
            <Row>
                <Col className="col-3">
                    <DemoSidebar/>
                </Col>
                <Col>
                    <Row className="text-center">
                        <span className="text-info">Welcome</span>
                    </Row>
                    <Row>
                        <p>
                            Examples of the various components in the&nbsp;
                            <code>@craigmcc/shared-react</code> component library.
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default DemoWelcome;
