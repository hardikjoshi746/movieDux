import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img src="logo.png" className="logo" alt="logo" />
      <h2 className="app-subtitle">
        It's time for Popcorn ! Find your next moview here.
      </h2>
    </div>
  );
}