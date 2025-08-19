import React, { useState } from "react";
import logo from "../../assets/icon.svg";

function App() {
    
    const [open, setOpen] = useState(false);


  return (
    <div className="app">
      {/* Navigation Header */}
      <header className="nav-header">
        {/* Left: Logo + Brand */}
        <div className="logo">
          <img src={logo} alt="TaskFlow Logo" className="logo-img" />
          <span className="logo-text">TaskFlow Pro</span>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="nav-menu">
          <a href="#">Dashboard</a>
          <a href="#">Projects</a>
          <a href="#">Calendar</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
        </nav>

        {/* Right: Search, Notifications, Profile */}
        <div className="nav-right">
          {/* Search Bar */}
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <span className="search-icon">🔍</span>
          </div>

          {/* Notification Bell */}
          <div className="notification">
            🔔
            <span className="badge">3</span>
          </div>

         {/* Profile Avatar + Dropdown */}
          <div className="profile">
            <div className="profile-header">
                <div className="avatar">V</div>
                <span className="username">Vijayalakshmi ▾</span>
            </div>

            {/* Dropdown Menu */}
            <ul className="dropdown">
                <li><a href="#">Profile Settings</a></li>
                <li><a href="#">Preferences</a></li>
                <li><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Dummy Content */}
      <div className="content">
        <h1>Welcome to TaskFlow Pro</h1>
        <p>This is where your dashboard will appear.</p>
      </div>
    </div>
  );
}

export default App;

