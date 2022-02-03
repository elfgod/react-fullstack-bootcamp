import React from 'react';

/* Life Cycles of a Class Component in order*/
class Life extends React.Component {
  constructor(){
    super();

    this.state = {
      name: 'Francis',      
    }
    console.log('1-Constructor');
  }
  // This get access to the current state
  static getDerivedStateFromProps(props, state){
    console.log('2-getDerivedStateFromProps');
    console.log(props, state);

    if(state.name === 'Ron'){
      return {
        name: 'Milhouse'
      }
    }

    return null;
  }
  componentDidMount(){
    console.log('4-componentDidMount');
  }
  // This will run only when we unmount a component
  componentWillUnmount(){
    console.log('5-componentWillUnmount');
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextState.name === 'Steve'){
      return false;
    }
    return true;
    
    // this lifecycle at the end of the day it needs
    // to return something a boolean true or false
    // if not i will complain
    // console.log('6-shouldComponentUpdate');
    // console.log(nextState);
    // console.log(this.state);
    // console.log(nextProps);
    // return true;
    // in true it will re-render render()
    // in false it will not re-render render()
  }
  // Stores and pass it to other lifecycles
  getSnapshotBeforeUpdate(prevProps, prevState){
    let age = 20;
    return age;

    console.log(prevProps);
    console.log(prevState);
    // return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    // This will trigger if the component was updated
    console.log('7-componentDidUpdate');
    console.log(prevState);;
    console.log(this.state);
    console.log(snapshot);
  }

  render() {
    console.log('3-Render');
    return (
      <>
        <h1>Life Cycles</h1>
        <div>{this.state.name}</div>
        <div onClick={() => this.setState({name: 'Ron'})}>change name</div>
      </>
    )
  }
}

export default Life;