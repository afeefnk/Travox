import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AdminLogin from "./pages/AdminLogin/AdminLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AdminLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
