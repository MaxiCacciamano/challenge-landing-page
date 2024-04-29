import { useState } from "react";
import "./App.css";
import { Home } from "./Component/Home/Home";
import { NavBar } from "./Component/Nav/NavBar";
import { Info } from "./Component/Info/Info";
import { Creations } from "./Component/Creations/Creations";
import { Footer } from "./Component/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="home-container">
        <Home />
      </div>
      <div className="informacion">
      <Info />
      </div>
      <div className="creations">
        <Creations/>
      </div>
      <div className="foo">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
