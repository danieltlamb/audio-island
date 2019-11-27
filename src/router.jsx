import React from "react";
import UsersPage from "./containers/UsersPage";
import ContactPage from "./containers/ContactPage";
import AboutPage from "./containers/AboutPage";
const routes = {
  "/": () => <UsersPage />,
  "/about": () => <AboutPage />,
  "/contact": () => <ContactPage />
};
export default routes;
