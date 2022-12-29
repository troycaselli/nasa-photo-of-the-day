import React, {useState, useEffect} from "react";
import axios from 'axios';
// import "./App.css";
import Description from './components/Description';
import Image from './components/Image';
import Occasion from './components/Occasion';
import styled from 'styled-components';

// 'CSS'
const Universal = styled.div`
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.tertiaryColor};
`;

const Header = styled.header`
  height: 100px;
  background: ${props => props.theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    flex-direction: column;
    height: 35vh;
    align-items: center;
    padding: 8% 0 4% 0;
  }
`;

const LogoImage = styled.img`
  height: 70%;
  margin-right: 4%;
  background-color: ${props => props.theme.black};
  @media (max-width: 500px) {
    height: 40%;
    margin: 0 0 3% 0;
  }
`;

const H1 = styled.h1`
  color:  ${props => props.theme.secondaryColor};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormInput = styled.input`
  border: 2px solid ${props => props.theme.tertiaryColor};
  outline-color: ${props => props.theme.tertiaryColor};
  border-radius: 5px;
`;

const Error = styled.p`
  font-size: .75rem;
  color: #8B0000
`;

const Card = styled.div`
  max-width: 1000px;
  margin: 3% auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 7% auto;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: ${props => props.theme.black};
`;

const Return = styled.a`
  background: ${props => props.theme.black};
  text-decoration: none;
  color: ${props => props.theme.secondaryColor};
  &:hover {
    transform: scale(1.2);
  }
`;

// component
function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const changeInput = (evt) => {
    setInput(evt.target.value);
  }

  const counter = (evt) => {
    if (evt.key === 'Enter') {
      if (evt.target.value >= 1 && evt.target.value < 6) {
        setCount(evt.target.value);
        setError('')
        evt.preventDefault()
      } else {
        setError('*Input must be between numbers 1-5')
        evt.preventDefault()
      }
    }
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${count}`)
      .then(res => {
        setData(res.data);
      }).catch(err => console.error(err));
  }, [count])
  
  return (
    <Universal>
      <Header>
        <LogoImage src='https://site.aace.org/wp-content/uploads/2019/03/NASA-meatball-insignia_rsz-1600x800.png' alt='NASA logo'/>
        <H1>NASA APOD Gallery</H1>
      </Header>
      <Form>
        <label>Image Count: <FormInput 
          type='text'
          placeholder='#1-5'
          value={input}
          onChange={changeInput}
          onKeyDown={counter}
        /></label>
        {error && <Error>{error}</Error>}
      </Form>
      {data.map((element, idx) => {
        return ( 
          <Card key={idx}>
            <Container>
              <Image image={element.hdurl} title={element.title}/>
              <Occasion title={element.title} date={element.date}/>
            </Container>
            <Description explanation={element.explanation}/>
          </Card>
        )
      })}
      <Footer>
        <Return href="#">Return to Top</Return>
      </Footer>
    </Universal>
  );
}

export default App;
