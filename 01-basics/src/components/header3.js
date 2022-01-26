import React from 'react';

/*
Feature 1: Click on the header in the browser,
and watch the console in the browser show 'i was clicked!'
*/
/*
Feature 2: inputChangeHandler1, Type in the input anything in the browser,
and watch the console log show 'i was changed!' every single character you type
*/
/*
Feature 3: inputChangeHandler2, Every time you type something in the input,
the value will show in the console of the browser
*/
/*
Feature 4: inputChangeHandler3, When you add the parenthesis to inputChangeHandler3()
it will run as soon as the app loads, Different syntax inputChangeHandler3() vs inputChangeHandler2()
*/
/*
Feature 5: inputChangeHandler4, Passing arguments + Catching the event,
we need to return a function that will be grabbing the event,
by doing it the app won't fire the function right away, it will wait until
we do something
*/

class Header1 extends React.Component {
  // Feature 2
  inputChangeHandler1() {
    console.log('i was changed!');

  }
  // Feature 3
  inputChangeHandler2(event) {
  console.log(event.target.value);
  }
  // Feature 4
  inputChangeHandler3(event) {
  console.log('This will run every time the App is loaded!');
  }
  // Feature 5
  inputChangeHandler4(e, name) {
    console.log(e.target.value);
    console.log(name);
  }
  
  render() {
  return (
    <>
    <h1>Header3</h1>
    {/* Feature 1 */}
    <header
      onClick={() => console.log('i was clicked!')}
    >
      <h2 className="logo">Logo</h2>
      <input onChange={this.inputChangeHandler1}/>
      <br />
      <input onChange={this.inputChangeHandler2}/>
      <br />
      <input onChange={this.inputChangeHandler3()}/>
      <br />
      <input onChange={(e) => this.inputChangeHandler4(e, 'HELLO!')}/>
    </header>
    </>
  );
 };
};

export default Header1;