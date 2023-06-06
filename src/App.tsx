import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/container/Navbar";
import Footer from "./component/container/footer";
import HomePage from "./component/pages/HomePage";
import AboutPage from "./component/pages/AboutPage";
import StackPage from "./component/pages/StackPage";
import ProjectPage from "./component/pages/ProjectPage";
import ContactPage from "./component/pages/ContactPage";

function App() {
  return (
    <div className=" px-10 md:px-28 lg:px-44">
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<StackPage />} path="/stack" />
        <Route element={<ProjectPage />} path="/projects" />
        <Route element={<ContactPage />} path="/contact" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
