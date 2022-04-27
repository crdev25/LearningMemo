import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "./btn-delete.css"

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

function BtnDelete(props) {
  const [isDeleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDeleting) {
      simulateNetworkRequest().then(() => {
        deleteMemoToServer();
        setDeleting(false);
        navigate("/");
      });
    }
  }, [isDeleting]);

  let deleteMemoToServer = async () => {
    let fetchURL = "/api/v1" + props.pathname + "/";
    let response = await fetch(fetchURL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const handleDelete = () => setDeleting(true);

  return (
    <Button
      variant="danger"
      disabled={isDeleting}
      onClick={isDeleting ? null : handleDelete}
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </Button>
  );
}

export default BtnDelete;
