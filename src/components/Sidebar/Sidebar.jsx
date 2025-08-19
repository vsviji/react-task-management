import React, { useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaTasks,
  FaStickyNote,
  FaTachometerAlt,
  FaHome,
  FaProjectDiagram,
  FaCalendarAlt,
  FaCog ,
  FaBars,
} from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ collapsed, setCollapsed }) => {



  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="collapse-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {!collapsed && (
        <div className="sidebar-scroll">
          <div className="actions">
            <button className="action-btn">
              <FaPlus /> New Task
            </button>
            <button className="action-btn">
              <FaTasks /> New Project
            </button>
            <button className="action-btn">
              <FaStickyNote /> Quick Note
            </button>
          </div>
          
          <div className="nav-links">
            <Link to="/dashboard" className="nav-item">
              <FaHome className="nav-icon" />
              {!collapsed && <span className="nav-label">Dashboard</span>}
            </Link>
            <Link to="/projects" className="nav-item">
              <FaProjectDiagram className="nav-icon" />
              {!collapsed && <span className="nav-label">Projects</span>}
            </Link>
            <Link to="/reports" className="nav-item">
              <FaStickyNote className="nav-icon" />
              {!collapsed && <span className="nav-label">Reports</span>}
            </Link>
            <Link to="/calendar" className="nav-item">
              <FaCalendarAlt className="nav-icon" />
              {!collapsed && <span className="nav-label">Calendar</span>}
            </Link>
            <Link to="/settings" className="nav-item">
              <FaCog className="nav-icon" />
              {!collapsed && <span className="nav-label">Settings</span>}
            </Link>
          </div>

        </div>
      )}
    </div>
  );
};

export default Sidebar;
