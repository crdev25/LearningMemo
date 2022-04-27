import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import "./btn-done.css";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

function BtnDone(props) {
  const [isUpdating, setUpdating] = useState(false);

  useEffect(() => {
    if (isUpdating) {
      simulateNetworkRequest().then(() => {
        updateMemoToServer();
        setUpdating(false);
      });
    }
  }, [isUpdating]);

  let updateMemoToServer = async () => {
    // check if adds a new memo or update a memo
    if (props.pathname === "/memo/new") {
      let fetchURL = "/api/v1/memo/";
      let response = await fetch(fetchURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props.memo),
      });
    } else {
      let fetchURL = "/api/v1" + props.pathname + "/";
      let response = await fetch(fetchURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props.memo),
      });
    }
  };

  const handleUpdate = () => setUpdating(true);

  return (
    <Button
      variant="primary"
      disabled={isUpdating}
      onClick={isUpdating ? null : handleUpdate}
    >
      {isUpdating ? "Updating..." : "Done"}
    </Button>
  );
}

export default BtnDone;
