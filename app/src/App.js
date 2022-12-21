import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Landing from './views/Landing'
import Auth from './views/Auth'
const App = ()=>{
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
export default App;