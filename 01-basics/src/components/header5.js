import React from 'react';

const Header5 = (props) => { 
  return (
    <>
      <h1>Header5</h1>
      <header>
        <div className="logo">Logo</div>
        <input
          onChange={props.keywords}
        />
      </header>
    </>
  );
};

export default Header5;