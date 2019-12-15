import React, { useState, useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import axios from "axios";
import CharCard from "./components/CharCard";
import Paginate from './components/pagination';

const App = () => {
  const [ data, setData ] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${currentPage}`)
      .then(response => {
        console.log(response)
        setData(response.data.results)
      })
      .catch(error => {
        console.log("The Data was not returned!", error)
      })
    }, [currentPage]);

  return (
    <div className="App">
      <Title>React Wars</Title>
      <Paginate click={setCurrentPage} current={currentPage}/>
      <CardCont>
        {data.map((props, key) => {
          return (
            <CharCard obj={props} key={key} />
          )
        })}
      </CardCont>
    </div>
  );
}

const CardCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
`;
const Title = styled.h1`
  color: black;
  font-size: 5rem;
  font-weight: bolder;
  -webkit-text-stroke-width: 1px; 
  -webkit-text-stroke-color: #FFE300;
`;

export default App;
