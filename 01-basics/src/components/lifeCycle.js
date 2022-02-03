import React from 'react';

/* Life Cycles of a Class Component in order*/
class Life extends React.Component {
  constructor(){
    super();

    this.state = {
      action: '',      
    }
    console.log('1-Constructor');
  }
  static getDerivedStateFromProps(){
    console.log('2-getDerivedStateFromProps');
    return null;
  }
  componentDidMount(){
    console.log('4-componentDidMount');
  }
  // This will run only when we unmount a component
  componentWillUnmount(){
    console.log('5-componentWillUnmount');
  }

  render() {
    console.log('3-Render');
    return (
      <>
        <h1>Life Cycles</h1>
      </>
    )
  }
}

export default Life;