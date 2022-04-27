import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import BtnDone from "../../components/Button/btn-done";
import BtnDelete from "../../components/Button/btn-delete";
import { ReactComponent as BtnBack } from "../../assets/btn/btn-back.svg";

import "./single-memo-page.css";

const SingleMemoPage = () => {
  const location = useLocation();
  let [memo, setMemo] = useState(null);

  useEffect(() => {
    getMemo();
  }, [location]);

  let getMemo = async () => {
    if (location.pathname === "/memo/new") return;
    let fetchURL = "/api/v1" + location.pathname; // /api/v1/memo/1
    let response = await fetch(fetchURL);
    let data = await response.json();
    setMemo(data);
  };

  return (
    <div className="container mt-5 single-page">
      {/* Header */}
      <div className="single-memo-header mb-3">
        <Link to={"/"}>
          <BtnBack />
        </Link>
        <div className="">
          {location.pathname !== "/memo/new" ? (
            <BtnDelete pathname={location.pathname} />
          ) : null}

          <BtnDone memo={memo} pathname={location.pathname} />
        </div>
      </div>
      {/* Subject */}
      <InputGroup className="mb-3">
        <InputGroup.Text>Subject</InputGroup.Text>
        <FormControl
          type="text"
          aria-label="Subject"
          placeholder="Subject"
          defaultValue={memo?.subject}
          onChange={(e) => {
            setMemo({ ...memo, subject: e.target.value });
          }}
        />
      </InputGroup>
      {/* Title */}
      <InputGroup className="mb-3">
        <InputGroup.Text>Title</InputGroup.Text>
        <FormControl
          type="text"
          aria-label="Title"
          placeholder="Title"
          defaultValue={memo?.title}
          onChange={(e) => {
            setMemo({ ...memo, title: e.target.value });
          }}
        />
      </InputGroup>
      {/* Note */}
      <InputGroup className="mb-3">
        <InputGroup.Text>Note</InputGroup.Text>
        <FormControl
          as="textarea"
          aria-label="Note"
          rows="10"
          placeholder="Your Note"
          defaultValue={memo?.note}
          onChange={(e) => {
            setMemo({ ...memo, note: e.target.value });
          }}
        />
      </InputGroup>
    </div>
  );
};

export default SingleMemoPage;
