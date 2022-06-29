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
  const [error, setError] = useState("Error"); //- any errors associated with fetching data from the API
  const [filterInputValue, setFilterInputValue] = useState(""); //- a string value used to create a controlled input in the FilterInput.jsx component
  const [newTransactionForm, setNewTransactionForm] = useState("");

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar filterInputValue={filterInputValue} setFilterInputValue={setFilterInputValue} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  transactions={transactions}
                  setTransactions={setTransactions}
                  transfers={transfers}
                  setTransfers={setTransfers}
                  error={error}
                  setError={setError}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  filterInputValue={filterInputValue}
                  setNewTransactionForm={setNewTransactionForm}
                />
              }
            />
            <Route path="/transactions/:trasactionId" element={<TransactionDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

//  `Home` component >>> 🚀 While the app is fetching data, the `Home.jsx` component should have an `isLoading` prop equal to `true`.

//When that prop is true, it should render an `h1` element with the text: `"Loading..."`. Otherwise, render the `BankActivity` component. It should always render the `AddTransaction` component.

// The Home.jsx component should render the `Loading...` text inside an `h1` element while it's fetching data. (ok)
