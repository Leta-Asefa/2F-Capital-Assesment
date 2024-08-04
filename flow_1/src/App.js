import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/main_components/Login";
import SignUp from "./components/main_components/SignUp";
import Admin from "./components/main_components/Admin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
