import React from 'react';
import styled, {keyframes} from 'styled-components';

const APODImage = styled.img`
    width: 40%;
    border-radius: 20px;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.2);
        transition: 0.3s ease-in-out;
    }
    
    @media (max-width: 500px) {
        width: 86.63%;
        margin: 6% 0 3% 0;
    }
`;

export default function Image(props) {
    const {image, title} = props;

    return (
        <APODImage src={image} alt={'image of ' + title} className="image"/>
    );
}