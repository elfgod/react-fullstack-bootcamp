import React from 'react';

/*
Feature 1: onChange input, every char you type, it will
be added to the state, and printed in the browser
*/

class Header5 extends React.Component {

  state = {
    keyword: '',
  }

  // Feature 1
  inputChangeHandler = (event) => {
    this.setState({
      keywords: event.target.value
    })
  }
  
  render() {
  return (
    <>
    <h1>Header5</h1>
    <header>
      <div className="logo">Logo</div>
      <input
        onChange={this.inputChangeHandler}
      />
    </header>
    </>
  );
 };
};

export default Header5;