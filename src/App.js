import React from "react";
import HomePage from "./pages/homePage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./pages/Auth/AuthForm";

function App() {
  return (
    <>
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>
      </Router>
=======
    <p>App will be comming soon<p>
>>>>>>> 3dd21237d37ea128b3d4540b6b5a44bd3fc1df8d
    </>
  );
}

export default App;
