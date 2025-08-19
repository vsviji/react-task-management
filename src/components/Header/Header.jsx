import React, { useState } from "react";
import logo from "../../assets/icon.svg";
import { Link } from "react-router-dom";
import searchIndex from "../../data/SearchIndex.jsx";

function Header() {
    
    const [open, setOpen] = useState(false);
     // 🔍 Search state and logic
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = searchIndex.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    }
  };

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
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/settings">Settings</Link>
        </nav>

        {/* Right: Search, Notifications, Profile */}
        <div className="nav-right">
          {/* 🔍 Search Bar */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              
            />
            <span className="search-icon">🔍</span>

            {suggestions.length > 0 && (
              <ul className="search-suggestions">
                {suggestions.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => {
                        setSearchTerm("");
                        setSuggestions([]);
                      }}
                    >
                      <strong>{item.name}</strong>
                      <span className="search-type">({item.type})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
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

      
    </div>
  );
}

export default Header;

