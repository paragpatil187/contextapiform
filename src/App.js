
import './App.css';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Users from './components/Users';
import Home from './components/Home';

function App() {
  
  return (
    <div className="App">
      
      
      <Link to="/registeration/one" style={{ margin: "10px" }}>
          1
        </Link>
        <Link to="/registeration/two" style={{ margin: "10px" }}>
          2
        </Link>
        <Link to="/users" style={{ margin: "10px" }}>
          users
        </Link>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/registeration/one" element={<Form1 />}></Route>
        <Route path="/registeration/two" element={<Form2/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
