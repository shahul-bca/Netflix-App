import React from "react";
// import { originals,action  } from "./urls";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost  title='Netflix Originals' />
      <Rowpost   title='action' isSmall />
    </div>
  );
}

export default App;
