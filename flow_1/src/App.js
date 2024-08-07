import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/main_components/Login";
import SignUp from "./components/main_components/SignUp";
import Admin from "./components/main_components/Admin";
import AuthLayout from "./components/layout_components/AuthLayout";
import AdminLayout from "./components/layout_components/AdminLayout";
import Dashboard from "./components/main_components/Dashboard";
import Books from "./components/main_components/Books";


function App() {
  return (
    <Router>
      <Routes >

        <Route element={<AuthLayout />}>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
