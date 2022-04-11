import './App.css';
import Nav from "./Componenetes/Nav"
import Header from "./Componenetes/Header"
import Work from  "./Componenetes/Work";
import About from "./Componenetes/About"


function App() {
  return (
    <div className="App">
    <div><Nav /></div>
    <div><Header /></div>

    <div className="Espacio"></div>

    <div><Work /></div>
    <div className="Espacio"></div>

    <div><About/></div>
    </div>
  );
}

export default App;
