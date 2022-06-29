import * as React from "react";
import Navbar, { Logo } from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import { useState } from "react";
// import TransactionalDetail from "../TransactionalDetail/TransactionalDetail";

export default function App() {
  const [isLoading, setIsLoading] = useState(false); //a boolean representing whether or not the app is currently requesting data from the API
  const [transactions, setTransactions] = useState([]); //- the list of bank transaction items fetched from the API
  const [transfers, setTransfers] = useState([]); //- the list of bank transfer items fetched from the API
  const [error, setError] = useState(""); //- any errors associated with fetching data from the API
  const [filterInputValue, setFilterInputValue] = useState(""); //- a string value used to create a controlled input in the FilterInput.jsx component

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar filterInputValue={filterInputValue} setFilterInputValue={setFilterInputValue} />
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
