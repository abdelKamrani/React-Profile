import { Route, Routes } from "react-router-dom";
import Global from "./components/Global";
import Hobbies from "./pages/Hobbies";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import './styles.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Global/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/hobbies" element={<Hobbies/>}/>
      </Routes>
    </div>
  );
}

export default App;
