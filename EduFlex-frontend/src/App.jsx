import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import FileUpload from "./components/FileUpload";
import AssignmentList from "./components/AssignmentList";
import ProfileDetails from "./components/ProfileDetails";
import EventComponent from "./components/EventComponent";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/uploads" element={<FileUpload />} />
            <Route path="/assignments" element={<AssignmentList />} />
            <Route path="/profile-details" element={<ProfileDetails />} />
            <Route path="/events" element={<EventComponent />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
