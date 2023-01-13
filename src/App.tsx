// App -----------------------------------------------------------------------

// Overall implementation of the entire demo application.

// External Modules ----------------------------------------------------------

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Internal Modules ----------------------------------------------------------

import DemoAddButton from "./DemoAddButton";
import DemoCallout from "./DemoCallout";
import DemoBackButton from "./DemoBackButton";
import DemoEditButton from "./DemoEditButton";
import DemoWelcome from "./DemoWelcome";

// Component Details ---------------------------------------------------------

function App() {

  return (
      <Router>
        <Routes>
          <Route path="add-button" element={<DemoAddButton/>}/>
          <Route path="back-button" element={<DemoBackButton/>}/>
          <Route path="callout" element={<DemoCallout/>}/>
          <Route path="edit-button" element={<DemoEditButton/>}/>
          <Route path="" element={<DemoWelcome/>}/>
        </Routes>
      </Router>
  )

}

export default App;
