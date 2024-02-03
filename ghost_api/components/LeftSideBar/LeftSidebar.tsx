// LeftSidebar.js

import React from 'react';
import '../LeftSideBar/LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="folder">
        <div className="folder-title">Folder 1</div>
        <div className="folder-content">
          <div>Content 1 of Folder 1</div>
          <div>Content 2 of Folder 1</div>
          <div>Content 3 of Folder 1</div>
          <div>Content 4 of Folder 1</div>
        </div>
      </div>
      <div className="folder">
        <div className="folder-title">Folder 2</div>
        <div className="folder-content">
          <div>Content 1 of Folder 2</div>
          <div>Content 2 of Folder 2</div>
          <div>Content 3 of Folder 2</div>
          <div>Content 4 of Folder 2</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
