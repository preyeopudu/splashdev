import "./App.css";
import Navbar from "./component/container/Navbar";
import AboutSection from "./component/sections/AboutSection";
import StackSection from "./component/sections/StackSection";

function App() {
  return (
    <div className=" px-10 md:px-28 lg:px-44">
      <Navbar />
      <AboutSection />
      <StackSection />
    </div>
  );
}

export default App;
