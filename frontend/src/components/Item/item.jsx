import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./item.css";

const Item = ({ memo }) => {
  return (
    <Link to={`/memo/${memo.id}`}>
      <div className="item">
        <div className="item-subject">
          <h3>{memo.subject}</h3>
        </div>
        <div className="item-title">
          <strong>{memo.title}</strong>
        </div>
        <div className="item-note">{memo.note}</div>
      </div>
    </Link>
  );
};

export default Item;
