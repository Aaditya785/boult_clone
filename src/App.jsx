import Gif from "./components/Gif1/Gif";
import Header from "./components/Header/Header";
import HomeScreen1 from "./components/HomeScreen1/HomeScreen1";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

function App() {
  
  return (
    <>
      <div className="App"  >
        <Header />
        <HomeScreen1 />
        <Gif/>
        <Navbar/>
      </div>
      <div style={{ height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Coming Soon...</div>
      <center className="mobiles"><h1>Only For Mobiles.</h1></center>
    </>
  );
}

export default App;
