import React from 'react';
import '../resources/default-layout.css';

export default function DefaultLayout(props) {
  return (
    <div className='layout'>
      <div className='header d-flex justify-content-between align-items-center'>
        <div>
          <h1 className='logo'>Budget Pal</h1>
        </div>

        <div>
          <h1 className='username'>username</h1>
        </div>
      </div>
      <div className='content'>{props.children}</div>
    </div>
  );
}
