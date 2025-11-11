import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-top absolute inset-0 h-screen pointer-events-none"></div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
