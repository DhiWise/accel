import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AllCompaniesDetail from "./pages/AllCompaniesDetail"
import AllCompanies from "./pages/AllCompanies"
import InterestsReceivedOne from "./pages/InterestsReceivedOne"
import Login from "./pages/Login"
const ProjectRoutes = (test) => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/interestsreceivedone"
            element={<InterestsReceivedOne />}
          />
          <Route path="/allcompanies" element={<AllCompanies />} />
          <Route path="/company-detail/:companyId" element={<AllCompaniesDetail />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
