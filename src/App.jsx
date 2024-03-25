import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import StatBoxes from "./components/statboxes/StatBoxes.jsx";
import Classes from "./components/classes/Classes.jsx";

function App() {

  return (
    <div>
        <Navbar/>
        <Hero/>
        <StatBoxes/>
        <Classes/>
    </div>
  )
}

export default App
