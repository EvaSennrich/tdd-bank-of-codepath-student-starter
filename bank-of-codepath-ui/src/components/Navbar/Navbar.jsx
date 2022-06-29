import * as React from "react";
import FilterInput from "../FilterInput/FilterInput";
import codepath from "../../assets/codepath.svg";
import avatar from "../../assets/avatar.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ filterInputValue, setFilterInputValue }) {
  const handleOnInputChange = (change) => {
    // The `setFilterInputValue` function its called with the new `value` from the `input` element when the `handleOnInputChange` function was called.
    setFilterInputValue(change.target.value);
  };

  return (
    <nav className="navbar">
      <a className="logo">Logo</a>
      <Logo path="/" />
      <div className="search">
        {/* FilterInpput calls its `handleOnChange` prop whenever the input value changes. */}
        <FilterInput inputValue={filterInputValue} handleOnChange={handleOnInputChange} />
      </div>

      <div className="user">
        <div className="notifications">
          <i className="material-icons md-36">notifications</i>
          <div className="green-dot" />
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <div className="info">
            <p>Person McPerson</p>
            <span>ID: 12345567</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo({ path }) {
  return (
    <a className="logo">
      <Link to="/">
        <img src={codepath} alt="logo" />
      </Link>
    </a>
  );
}
