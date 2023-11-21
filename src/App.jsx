import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// badha ma star vadu background karvanu che
//email js ma problem ave che // problem solved configuration mate permission apvani 
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
        </div>

        <div className="relative z-0">
          <Experience />
          
        </div>

        <div className="relative z-0">
          <Tech />
          {/* <StarsCanvas /> */}
        </div>

        <div>
          <Works />
        </div>

        <div>
          <Feedbacks />
          {/* <StarsCanvas/> */}
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
