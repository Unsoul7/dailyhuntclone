import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import "./style.css";
function App() {
  return (
    <div>
      <Navbar />
      <div id="main-section">
         <Sidebar/>
         <Main/>
      </div>
    </div>
  );
}

export default App;
