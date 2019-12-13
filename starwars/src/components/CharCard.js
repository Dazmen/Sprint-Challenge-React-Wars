import React from 'react';
import styled from "styled-components";


function CharCard(props) {

    return(
        <Card>
            <h2>Name: <CharInfo>{props.obj.name}</CharInfo> </h2>
            <p>Gender: <CharInfo>{props.obj.gender}</CharInfo></p>
            <p>Birth Year: <CharInfo>{props.obj.birth_year}</CharInfo></p>
            <p>Height: <CharInfo>{props.obj.height}</CharInfo></p>
            <p>Eye Color: <CharInfo>{props.obj.eye_color}</CharInfo></p>
            <p>Skin Color: <CharInfo>{props.obj.skin_color}</CharInfo></p>
            <p>Hair Color: <CharInfo>{props.obj.hair_color}</CharInfo></p>
            <p>Mass: <CharInfo>{props.obj.mass}</CharInfo></p>
        </Card>
    );
};

const Card = styled.div`
    margin: 1%;
    width: 25%;
    background-color: lightgrey;
    border: 2px solid black;
    border-radius: 15px;
    opacity: 0.7;
`;
const CharInfo = styled.span`
    font-weight: bold;
    color: #425D7A;
    font-size: 2rem;
`;

export default CharCard