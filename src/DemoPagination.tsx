// DemoPagination ------------------------------------------------------------

// Demos for Pagination component.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {ButtonVariant, Pagination} from "@craigmcc/shared-react";

// Internal Modules ----------------------------------------------------------

import DemoSidebar from "./DemoSidebar";

// Component Details ---------------------------------------------------------

const DemoPagination = () => {

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
        <Container fluid="md" id="DemoPagination">
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
            {VARIANTS.map((variant, index) => (
                <Row key={variant} className="mb-2">
                    <Col className="col-2 text-center">
                        {variant}
                    </Col>
                    <Col>
                        <Pagination
                            currentPage={index}
                            lastPage={true}
                            variant={`outline-${variant}`}
                        />
                    </Col>
                </Row>
            ))}
        </Container>
    )

}

export default DemoPagination;
