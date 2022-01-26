import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';

import Header1 from './components/header1';
import Header2 from './components/header2';
import Header3 from './components/header3';
import Header4 from './components/header4';

const App = () => {
  return (
    <>
      <Header4 />
      <br></br>
      <Header3 />
      <br></br>
      <Header2 />
      <br></br>
      <Header1 />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));