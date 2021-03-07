import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';
import AdminLayout from "../../src/layouts/Admin/Admin.js";

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
 

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
     
     {/*  <Aside
        
      /> */}
      {/* <Main
        image={image}
        toggled={toggled}
        collapsed={collapsed}
        rtl={rtl}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange}
        handleImageChange={handleImageChange}
      /> */}


<AdminLayout/>
     
    </div>
  );
}

export default Layout;
