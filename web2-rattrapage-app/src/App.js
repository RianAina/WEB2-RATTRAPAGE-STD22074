import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "http://localhost:4000/apartments";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "black" }}>All appartements
      </h1>
      <input type="text" placeholder="Filtrer par prix max"></input>
      <button>Filter</button>
      <center>
        {data.map((dataObj, index) => {
          return (

            <div>  
        
              <div key={index}>  
            
        
              <img src={dataObj.picture} alt={dataObj.description}></img>
              <p style={{ fontSize: 20, color: 'black'}}>{dataObj.description}</p> 
              <p style={{ fontSize: 20, color: 'grey' }}>Prix: {dataObj.price} Euro</p>
              
            </div>
    </div>



            
          );
        }
        )}
      </center>
    </div>
  );
}

export default App;