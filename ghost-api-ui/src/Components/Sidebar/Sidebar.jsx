import React from 'react';
import Drawer from '@mui/material/Drawer';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      
      <div className='sidebar-parent'>
        <p>This is the sidebar content</p>
           <h5>Mock-api-01</h5>
           <h5>Mock-api-02</h5>
           <h5>Mock-api-03</h5>
           <h5>Mock-api-04</h5>
           <h5>Mock-api-05</h5>
           <h5>Mock-api-01</h5>
           <h5>Mock-api-02</h5>
           <h5>Mock-api-03</h5>
           <h5>Mock-api-04</h5>
           <h5>Mock-api-05</h5>
           <h5>Mock-api-01</h5>
           <h5>Mock-api-02</h5>
           <h5>Mock-api-03</h5>
           <h5>Mock-api-04</h5>
           <h5>Mock-api-05</h5>
      </div>
    </Drawer>
  );
};

export default Sidebar;
