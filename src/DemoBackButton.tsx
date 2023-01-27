// DemoBackButton ------------------------------------------------------------

// Demos for the BackButton component.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {BackButton, ButtonVariant} from "@craigmcc/shared-react";

// Internal Modules ---------------------------------------------------------

import DemoSidebar from "./DemoSidebar";

// Component Details --------------------------------------------------------

const DemoBackButton = () => {

    const VARIANTS: ButtonVariant[] = [
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
                        <Col className="text-start">
                            <h5>Small</h5>
                        </Col>
                        <Col className="text-start">
                            <h5>Medium</h5>
                        </Col>
                        <Col className="text-start">
                            <h5>Large</h5>
                        </Col>
                        <Col className="text-start">
                            <h5>Disabled</h5>
                        </Col>
                    </Row>
                    {VARIANTS.map((variant) => (
                        <Row key={variant} className="mb-2">
                            <Col className="col-2 text-center">
                                {variant}
                            </Col>
                            <Col>
                                <BackButton
                                    size="small"
                                    variant={variant}
                                />
                            </Col>
                            <Col>
                                <BackButton
                                    size="medium"
                                    variant={variant}
                                />
                            </Col>
                            <Col>
                                <BackButton
                                    size="large"
                                    variant={variant}
                                />
                            </Col>
                            <Col>
                                <BackButton
                                    disabled={true}
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
