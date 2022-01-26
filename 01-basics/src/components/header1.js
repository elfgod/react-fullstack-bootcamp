import React from 'react';

const Header = () => {

  const getTheYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
  }

  return (
    <div>
      <h1>Header1</h1>
      <header style={styles.header}>
        <h2 style={styles.logo}>Logo</h2>
      </header>
        <h4>The date is: {Date.now()}</h4>
        <h4>The year is: {getTheYear()}</h4>
        <h4>sum 4 + 4 = {4 + 4}</h4>
    </div>
  )
}

// In-line styling
// Example <h2 className={styles.logo}>Header</h2>
let styles = {
  header: {
    background: '#03a9fa'
  },
  logo: {
    color: '#fff',
    fontFamily: 'Anton',
    textAlign: 'center'
  }
}

export default Header;