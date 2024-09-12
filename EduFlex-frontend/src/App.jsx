import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
// import FileUpload from "./components/FileUpload";
// import AssignmentList from "./components/AssignmentList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<Profile />} />
            {/* <Route exact path="/fileupload" element={<FileUpload />} />
            <Route exact path="/assignmentlist" element={<AssignmentList />} /> */}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
