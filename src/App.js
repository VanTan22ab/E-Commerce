import React from "react";
import HomePage from "./pages/homePage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./pages/Auth/AuthForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
