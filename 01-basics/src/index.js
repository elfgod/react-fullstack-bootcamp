import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';

import Header5 from './components/header5';
import NewsList from './components/news_list';
import Footer from './components/footer';

// Importing the data base json 
import JSON from './db.json';
import Header4 from './components/header4';

class App extends React.Component {

  state = {
    news: JSON,
    filtered: JSON,
    footerText: 'i am a happy footer'
  }

  getKeywords = (event) => {
    console.log(event.target.value);
    // Created this variable so i don't need to do
    // event.target.value every single time
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) > -1;
    });

    this.setState({
      // Same key and same value, we can use short syntax
      // filtered: filtered
      filtered
    });

    console.log(filtered);
  }

  render() {
    // Getting the data from the import
    // console.log(JSON);

    // Getting the data from the state
    // console.log(this.state.news);

    // Create an alias for the props
    const { news, footerText, filtered } = this.state;
  return (
    <>
      <Header4 />
      <Header5 
        keywords={ this.getKeywords }
      />
      {/* Passing data JSON to the NewsList component */}
      <NewsList news={ filtered } >
        <h2>i am a children</h2>
      </NewsList>
      <Footer footerText={ footerText } />
      <br />
    </>
  )
 }
}

ReactDOM.render(<App />, document.getElementById('root'));