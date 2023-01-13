// DemoBackButton -------------------------------------------------------------

// Demos for the BackButton component.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {BackButton, BackButtonVariant} from "@craigmcc/shared-react";

// Internal Modules ---------------------------------------------------------

import DemoSidebar from "./DemoSidebar";

// Component Details --------------------------------------------------------

const DemoBackButton = () => {

    const VARIANTS: BackButtonVariant[] = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
    ]

    return (
        <Container fluid="md" id="DemoBackButton">
            <Row>
                <Col className="col-3">
                    <DemoSidebar/>
                </Col>
                <Col>
                    <Row>
                        <Col className="col-2 text-center">
                            <h5>Variant</h5>
                        </Col>
                        <Col className="text-center">
                            <h5>Example</h5>
                        </Col>
                    </Row>
                    {VARIANTS.map((variant) => (
                        <Row key={variant} className="mb-2">
                            <Col className="col-2 text-center">
                                {variant}
                            </Col>
                            <Col>
                                <BackButton
                                    variant={variant}
                                />
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    )


}

export default DemoBackButton;
