import * as React from "react";
import AddTransaction from "../AddTransaction/AddTransaction";
import BankActivity from "../BankActivity/BankActivity";
import "./Home.css";
import { useEffect } from "react";
import axios from "axios";

export default function Home(props) {
  let filteredTransactions = [props.transactions];

  //  function filterCategory(selectedCategory) {
  //    // changeCategory(selectedCategory);

  // if (props.filterInputValue != "") {
  //   return filteredTransactions.filter((e) => e.description === filterInputValue);
  // } else {
  //   return props.transactions;
  // }
  //    setFilterResult(transactions.filter((e) => e.category === selectedCategory));

  //    console.log("------>", selectedCategory);
  //    filterResult.length > 0 && setProducts(filterResult);
  //  }

  useEffect(() => {
    console.log(props.setIsLoading);
    props.setIsLoading(true);

    //Fetching data from API func
    //  It should make a GET request to the API's /store endpoint with the axios.get method.
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:3001/bank/transactions");
        console.log(response.data);
        // const data = await response?.data?.transactions;
        // props.setTransactions(response.data);
      } catch (e) {
        //  If the request does not complete successfully, or there are no products found in the response, it should create an error message and store it in the error state variable.
        console.log("ERROR--->", e);
        props.setError(error);
      }
    };
    fetchTransactions();
  }, []);

  // useEffect for fetching transfers
  useEffect(() => {
    props.setIsLoading(true);

    const fetchTransfers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/bank/transfers");
        console.log(response.data);
        // const data = await response?.data?.products;
        // setTransfers(data);
      } catch (e) {
        console.log("----->>>>", e);
        setError(error);
      }
    };

    fetchTransfers();
  }, []);

  return (
    <div className="home">
      <AddTransaction />
      {/* If the Home.jsx component receives any defined value for its error prop, it should render an error message inside of an h2 element with the className of
      error. */}
      {props.error ? <h2 className="error">{props.error}</h2> : null}

      {/* if isLoading props true, render "Loading..."
      Otherwise, render the BankActivity component. */}
      {props.isLoading ? <h1>Loading...</h1> : <BankActivity />}
    </div>
  );
}
