import Gif from "./components/Gif1/Gif";
import Header from "./components/Header/Header";
import HomeScreen1 from "./components/HomeScreen1/HomeScreen1";
import Navbar from "./components/Navbar/Navbar";

function App() {
  
  return (
    <>
      <div className="App" >
        <Header />
        <HomeScreen1 />
        <Gif/>
        <Navbar/>
      </div>
    </>
  );
}

export default App;
