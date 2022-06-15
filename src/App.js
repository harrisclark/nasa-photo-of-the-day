import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import Header from './Header';
import Details from './Details';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, []);

  return (
    <div className="App">
      {/* {<p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>} */}
      <Header />
      {data.length === 0 ? <h3>Loading...</h3> : <Details data={data} />}
      
    </div>
  );
}

export default App;
