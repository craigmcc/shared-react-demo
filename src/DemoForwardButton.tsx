// DemoForwardButton ---------------------------------------------------------

// Demos for the ForwardButton component.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {ForwardButton, ButtonVariant} from "@craigmcc/shared-react";

// Internal Modules ---------------------------------------------------------

import DemoSidebar from "./DemoSidebar";

// Component Details --------------------------------------------------------

const DemoForwardButton = () => {

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
        <Container fluid="md" id="DemoForwardButton">
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
                                <ForwardButton
                                    size="small"
                                    variant={variant}
                                />
                            </Col>
                            <Col>
                                <ForwardButton
                                    size="medium"
                                    variant={variant}
                                />
                            </Col>
                            <Col>
                                <ForwardButton
                                    size="large"
                                    variant={variant}
                                />
                            </Col>
                            <Col>
                                <ForwardButton
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

export default DemoForwardButton;
