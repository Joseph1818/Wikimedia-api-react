import "./App.css";
import Register from "./components/Authentification_Component/register";
import Login from "./components/Authentification_Component/login";
import ForgotPassword from "./components/Authentification_Component/forgotPwd";
import ConfirmationForgotPwd from "./components/Authentification_Component/confirmationForgotPwd";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import SuccessPwdChangePage from "./components/Authentification_Component/successPwdChangePage";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="forgotPwd" element={<ForgotPassword />} />
          <Route path="confirmationtPwd" element={<ConfirmationForgotPwd />} />
          <Route path="sucessPwdChange" element={<SuccessPwdChangePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
