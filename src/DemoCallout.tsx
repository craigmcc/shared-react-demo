// DemoCallout ---------------------------------------------------------------

// Demos for the Callout component.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Callout, CalloutVariant} from "@craigmcc/shared-react";

// Internal Modules ---------------------------------------------------------

import DemoSidebar from "./DemoSidebar";

// Component Details --------------------------------------------------------

const DemoCallout = () => {

    const VARIANTS: CalloutVariant[] = [
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
        <Container fluid="md" id="DemoCallout">
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
                        <Row key={variant}>
                            <Col className="col-2 text-center">
                                {variant}
                            </Col>
                            <Col>
                                <Callout
                                    title="Callout Title"
                                    variant={variant}
                                >
                                    <p>
                                        This is the text of a Callout for variant&nbsp;
                                        <strong>{variant}</strong>.
                                    </p>
                                    <p>
                                        It can contain pretty much any content inside.
                                    </p>
                                </Callout>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    )


}

export default DemoCallout;
