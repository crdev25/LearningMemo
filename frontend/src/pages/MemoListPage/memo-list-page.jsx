import React, { useState, useEffect } from "react";
import { ReactComponent as BtnAdd } from "../../assets/btn/btn-add.svg";
import { Link } from "react-router-dom";

import Item from "../../components/Item/item";

import "./memo-list-page.css";

const MemoListPage = () => {
  let [memoList, setMemoList] = useState([]);

  useEffect(() => {
    getMemoList();
  }, []);

  let getMemoList = async () => {
    let response = await fetch("/api/v1/memo/");
    let data = await response.json();
    setMemoList(data);
  };

  return (
    <div className="container mt-5 list-page">
      <div className="list-header">
        <h1>LEARNING MEMO LIST</h1>
      </div>

      {memoList.map((memo, index) => (
        <Item key={index} memo={memo} />
      ))}

      <div className="list-bottom-header">
        <Link to={"/memo/new"}>
          <BtnAdd />
        </Link>
      </div>
    </div>
  );
};

export default MemoListPage;
