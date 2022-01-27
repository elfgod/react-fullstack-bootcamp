import React from 'react';

// (props) lets you grab the data passed by parent component JSON db.json
const newsList = (props) => {
  
  const news2 = props.news.map((item)=>(
        <div>          
        <br />
              <div key={item.id}>
                <h4>{item.title}</h4>
                <div>
                  <p>{item.feed}</p>
                </div>
              </div>
        </div>
    ))

  console.log(props);
  return (
    <>
      <h2>News2 lists:</h2>
      { news2 }
      <br />
      <div>
        <h2>News lists:</h2>
      <br />
        <div>
          {props.news.map((item)=>(
            <div key={item.id}>
              <h4>{item.title}</h4>
              <div>
                <p>{item.feed}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default newsList;