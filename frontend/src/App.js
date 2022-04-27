import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemoListPage from "./pages/MemoListPage/memo-list-page";
import SingleMemoPage from "./pages/SingleMemoPage/single-memo-page";

import "./App.css";

// Keep App.js used for routing
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MemoListPage />} />
          <Route exact path="/memo/new" element={<SingleMemoPage />} />
          <Route exact path="/memo/:id" element={<SingleMemoPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
