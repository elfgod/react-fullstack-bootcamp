import React, { useState } from 'react';

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

  // const restOne = () => {    
  //   setCount( prevCount => prevCount - 1);
    
  //   // setCount(--count);

  //   // setCount( prevCount => {
  //   // return prevCount - 1
  //   // });
  // }

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

      <h2 />
      { posts.map((post, i)=>(
        <div key={i}>
          <div>Name: { post.name }</div>
          <div>Body: { post.body }</div>
          <hr />
        </div>
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
