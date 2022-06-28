import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
// import TransactionalDetail from "../TransactionalDetail/TransactionalDetail";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Home />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions/:trasactionId" element={<TransactionDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
