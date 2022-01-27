
import React from 'react';


const NewsItem = ({ item }) => {
  
  // console.log(props);
  console.log(item);

  return(
    <div className="news_item">          
      <br />
        <div>
            <h4>{item.title}</h4>
          <div>
            <p>{item.feed}</p>
          </div>
        </div>
    </div>
  )
}

export default NewsItem;