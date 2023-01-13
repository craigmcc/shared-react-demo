// DemoSidebar ---------------------------------------------------------------

// Sidebar with navigation controls for demo component views.

// External Modules ----------------------------------------------------------

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {NavLink} from "react-router-dom";

// Internal Modules ----------------------------------------------------------

// Component Details ---------------------------------------------------------

const DemoSidebar = () => {

    type Selection = {
        name: string;
        to: string;
    }

    const FORM_SELECTIONS: Selection[] = [
        { name: "CheckBoxField",        to: "/check-box-field" },
        { name: "SelectField",          to: "/select-field" },
        { name: "TextField",            to: "/text-field" },
    ];

    const GENERAL_SELECTIONS: Selection[] = [
        { name: "AddButton",            to: "/add-button" },
        { name: "BackButton",           to: "/back-button" },
        { name: "Callout",              to: "/callout" },
        { name: "CheckBox",             to: "/check-box" },
        { name: "EditButton",           to: "/edit-button" },
        { name: "Pagination",           to: "/pagination" },
        { name: "SearchBar",            to: "/search-bar" },
    ];

    return (
        <Container className="bg-light navbar navbar-nav" fluid id="demoSidebar">
            <Row>
                <h4>Form Fields</h4>
            </Row>
            {FORM_SELECTIONS.map((selection) => (
                <NavLink key={selection.name} className="nav-link" to={selection.to}>{selection.name}</NavLink>
            ))}
            <Row>
                <span>&nbsp;</span>
            </Row>
            <Row>
                <h4>General Components</h4>
            </Row>
            {GENERAL_SELECTIONS.map((selection) => (
                <NavLink key={selection.name} className="nav-link" to={selection.to}>{selection.name}</NavLink>
            ))}
            <Row>
                <span>&nbsp;</span>
            </Row>
        </Container>
    )


}

export default DemoSidebar;
