import aachman from "./images/aachman.png"
import MainComponent from "./components/MainComponent"
import Footer from "./components/Footer"
import "./app.css"


function App() {
  return (
    <div className="App">
      <img src={aachman} alt="why" className="main-image" />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
