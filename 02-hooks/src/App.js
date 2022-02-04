import React, { useState, useEffect } from 'react';

import Post from './posts';


const App = ({ initialCount }) => {
  // Passing props from index.js initialCount
  // let [count, setCount] = useState(initialCount);

  const [state, setState] = useState({
    count: initialCount,
    user: "Francis"
  })
  let [posts, setPosts] = useState([
    {
      name: 'Super awesome post',
      body: 'The content of the post 1'
    },
    {
      name: 'JS is great',
      body: 'The content of post 2'
    },
    {
      name: 'ReactJS is so fun',
      body: 'The content of post 3'
    }
  ])

  // const addOne = () => {
  //   setCount(++count);
  // }

  const addOne2 = () => {
    setState({
      ...state,
      count: ++state.count
    })
  }

  const restOne2 = () => {
    setState({
      ...state,
      count: state.count - 1
    })
  }

  const addOnePost = () => {
    let newPost = {
      name: 'I want to learn InfoSec',
      body: 'This is the content of post 4'
    }
    setPosts([
      ...posts,
      newPost
    ])
  }

  const removePosts = () => {
    setPosts([])
  }

  // const restOne = () => {    
  //   setCount( prevCount => prevCount - 1);
    
  //   // setCount(--count);

  //   // setCount( prevCount => {
  //   // return prevCount - 1
  //   // });
  // }

  useEffect(()=>{
    // console.log('state: ', state);
  },[state])
  // Pass 2 arguments a func and an array
  // Why an array? because i can listen for multiple things
  useEffect(()=>{
    // console.log('useEffect: change on state: ', state, posts);
  },[state, posts])

  // This will run only 1 time because i am not passing data in the array []
  useEffect(()=>{
    // console.log('MOUNTED');
  },[])

  return (
    <>
      <h2>{ state.user }</h2>
      <h3>Count: {state.count}</h3>
      <button onClick={ () => setState({
        ...state,
        count: state.count+1
        }) }>Add one +1</button>
      <button onClick={() => setState({
        ...state,
        count: --state.count
        }) }>Rest one -1</button>
      <br /><br />
      <button onClick={ addOne2 }>Add one +1</button>
      <button onClick={ restOne2 }>Rest one -1</button>
      
      <br /><br />
      <button onClick={ removePosts }>Remove posts</button>

      <h2 />
      { posts.map((post, i)=>(
        <Post post={post} key={i} />
      ))}

      <button
        onClick={ addOnePost }
      >
        Add one more
      </button>

      {/* <button onClick={ addOne }>Add one +1</button>
      <button onClick={ restOne }>Rest one -1</button>
      <br /><br />
      <button onClick={() => setCount(count+1)}>Add one +1</button>
      <button onClick={() => setCount(count-1)}>Rest one -1</button>
      <br /><br />
      <button onClick={() => setCount(initialCount)}>RESET</button> */}
    </>
  );
}

export default App;
