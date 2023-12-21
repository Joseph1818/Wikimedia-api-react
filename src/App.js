import "./App.css";
import Register from "./components/register";
import Login from "./components/login";
import ForgotPassword from "./components/forgotPwd";
import { Link, Routes, Route } from "react-router-dom";



function App() {
  return (
    <main className="App">
      <ForgotPassword />
    </main>
  );
}

export default App;
