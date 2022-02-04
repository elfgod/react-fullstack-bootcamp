import React, { useEffect } from 'react';

const Post = ({ post }) => {

  useEffect(()=>{
    console.log('post created');

    return () => {
      console.log('component exit');
    }
    
  },[])
  return(
      <div>
        <div>Name: { post.name }</div>
        <div>Body: { post.body }</div>
        <hr />
      </div>
  )
}

export default Post;