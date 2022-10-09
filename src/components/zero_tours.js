import React from "react";
import { refresh } from "../hooks/usefetch";

function ZeroTours() {
  return (
    <>
      <h1 className="loading">There is no tours left </h1>
      <button className="btn" onClick={refresh}>
        refresh
      </button>
    </>
  );
}

export default ZeroTours;
