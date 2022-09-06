import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Description from './components/Description';
import Image from './components/Image';
import Occasion from './components/Occasion';

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  const counter = (event) => {
    if (event.target.value > 1 && event.target.value < 6) {
      setCount(event.target.value);
    }
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${count}`)
      .then(res => {
        console.log(res);
        setData(res.data);
      }).catch(err => console.error(err));
  }, [count])
  
  return (
    <div className="App">
      <header>
        <img src='https://site.aace.org/wp-content/uploads/2019/03/NASA-meatball-insignia_rsz-1600x800.png' alt='NASA logo'/>
        <h1>NASA APOD Gallery</h1>
      </header>
      <form>
        <label>Image Count: <input type='text' placeholder='#1-5' onChange={counter}/></label>
      </form>
      {data.map(element => {
        return ( 
          <div id="card">
            <div className="container">
              <Image image={element.hdurl} title={element.title} />
              <Occasion title={element.title} date={element.date}/>
            </div>
            <Description explanation={element.explanation}/>
          </div>
        )
      })}
      <footer>
        <a href="#">Return to Top</a>
      </footer>
    </div>
  );
}

export default App;
