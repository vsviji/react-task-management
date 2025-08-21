  import React from "react";
  import { useState } from "react";
  import { Routes, Route } from "react-router-dom";
  import Header from './components/Header/Header';
  import Sidebar from './components/Sidebar/Sidebar';
  import Dashboard from './pages/Dashboard';
  import Projects from './pages/Projects';
  import Calendar from './pages/Calendar';
  import Reports from './pages/Reports';
  import Settings from './pages/Settings';
  
  function App() {
     const [collapsed, setCollapsed] = useState(false);
    return (
      <>
      <div className="app-container">
      <Header />
      <div className="layout">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className={`main-content ${collapsed ? 'collapsed' : ''}`}>
          
          <Routes>
            {/* Empty home */}
            <Route path="/" element={<Dashboard />} />
            
            {/* Now dashboard only shows when clicked */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
      </>
    );
  }

  export default App;
