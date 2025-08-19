import React, { useState } from 'react';
import Sidebar from './Sidebar'; // adjust path if needed
import './Layout.css'; // optional

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className={`main-content ${collapsed ? 'collapsed' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
