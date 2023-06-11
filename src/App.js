import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import CurrenciesScreen from "./screens/CurrenciesScreen";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/sign_up" element={<SignUpScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/currencies" element={<CurrenciesScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
