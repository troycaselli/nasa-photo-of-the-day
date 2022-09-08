import React from 'react';
import styled from 'styled-components';

const APODImage = styled.img`
    width: 40%;
    border-radius: 20px;
    @media (max-width: 500px) {
        width: 86.63%;
    }  
`;

export default function Image(props) {
    const {image, title} = props;

    return (
        <APODImage src={image} alt={'image of ' + title} className="image"/>
    );
}