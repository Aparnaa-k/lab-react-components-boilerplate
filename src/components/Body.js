import React from 'react';
import '../App.css';
import lake from "../image/lake.JPG";

const imageData = [
    {
      id:1,
      img:lake 
    },
    {
      id:2,
      img:lake
    },
    {
      id:3,
      img:lake
    },
    {
      id:4,
      img:lake
    }
  ]
  

const Body = () => {
  return (
    <section className="body">
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
    </section>
  );
};

export default Body;
