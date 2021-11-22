import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import "./app.css"


function App() {
  return (
    <div className="App">
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <div className="others">
    <Home/>
    </div>
    </div>
    </div>
  );
}

export default App;
