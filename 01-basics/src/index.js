import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';

import Header1 from './components/header1';
import Header2 from './components/header2';

const App = () => {
  return (
    <>
      <Header2 />
      <br></br>
      <Header1 />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));