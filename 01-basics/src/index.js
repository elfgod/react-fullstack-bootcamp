import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';

import Header1 from './components/header1';
import Header2 from './components/header2';
import Header3 from './components/header3';
import Header4 from './components/header4';
import Header5 from './components/header5';
import NewsList from './components/news_list';

// Importing the data base json 
import JSON from './db.json';

class App extends React.Component {

  state = {
    news: JSON
  }

  render() {
    // Getting the data from the import
    // console.log(JSON);

    // Getting the data from the state
    console.log(this.state.news);
  return (
    <>
      <Header5 />
      {/* Passing data JSON to the NewsList component */}
      <NewsList news={this.state.news} />
      <br />
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
}

ReactDOM.render(<App />, document.getElementById('root'));