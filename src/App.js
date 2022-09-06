import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Description from './components/Description';
import Image from './components/Image';
import Occasion from './components/Occasion';


const dummyData = [
  {id: 1,
  date: "2009-03-22",
  explanation: "The Sun destroyed this comet.  Arcing toward a fiery fate, this Sungrazer comet was recorded by the SOHO spacecraft's Large Angle Spectrometric COronagraph(LASCO) on 1996 Dec. 23. LASCO uses an occulting disk, partially visible at the lower right, to block out the otherwise overwhelming solar disk allowing it to image the inner 5 million miles of the relatively faint corona. The comet is seen as its coma enters the bright equatorial solar wind region (oriented vertically). Spots and blemishes on the image are background stars and camera streaks caused by charged particles. Positioned in space to continuously observe the Sun, SOHO has now been used to discover over 1,500 comets, including numerous sungrazers. Based on their orbits, they are believed to belong to a family of comets created by successive break ups from a single large parent comet which passed very near the Sun in the twelfth century. The Great Comet of 1965, Ikeya-Seki, was also a member of the Sungrazer family, coming within about 650,000 kilometers of the Sun's surface. Passing so close to the Sun, Sungrazers are subjected to destructive tidal forces along with intense solar heat. This comet, known as SOHO 6, did not survive.   digg_url = 'http://apod.nasa.gov/apod/ap090322.html'; digg_skin = 'compact';",
  hdurl: "https://apod.nasa.gov/apod/image/0903/sungrazer_soho_big.gif",
  title: "Sungrazer"
},
{id: 2,
  date: "2009-03-22",
  explanation: "The Sun destroyed this comet.  Arcing toward a fiery fate, this Sungrazer comet was recorded by the SOHO spacecraft's Large Angle Spectrometric COronagraph(LASCO) on 1996 Dec. 23. LASCO uses an occulting disk, partially visible at the lower right, to block out the otherwise overwhelming solar disk allowing it to image the inner 5 million miles of the relatively faint corona. The comet is seen as its coma enters the bright equatorial solar wind region (oriented vertically). Spots and blemishes on the image are background stars and camera streaks caused by charged particles. Positioned in space to continuously observe the Sun, SOHO has now been used to discover over 1,500 comets, including numerous sungrazers. Based on their orbits, they are believed to belong to a family of comets created by successive break ups from a single large parent comet which passed very near the Sun in the twelfth century. The Great Comet of 1965, Ikeya-Seki, was also a member of the Sungrazer family, coming within about 650,000 kilometers of the Sun's surface. Passing so close to the Sun, Sungrazers are subjected to destructive tidal forces along with intense solar heat. This comet, known as SOHO 6, did not survive.   digg_url = 'http://apod.nasa.gov/apod/ap090322.html'; digg_skin = 'compact';",
  hdurl: "https://apod.nasa.gov/apod/image/0903/sungrazer_soho_big.gif",
  title: "Sungrazer"
}]

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
