import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeSection /> },
      { path: "about", element: <AboutSection /> },
      { path: "skills", element: <SkillsSection /> },
      { path: "projects", element: <ProjectsSection /> },
      { path: "contact", element: <ContactSection /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}