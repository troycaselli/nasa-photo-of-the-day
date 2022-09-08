import React from 'react';
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
    100% {
        opacity: 1;
    }
`;

const Explanation = styled.p`
    margin: 5% 6.67%;
    padding: 2.5% 4%;
    display: flex;
    justify-content: center;
    text-align: justify;
    border: 2px solid ${props => props.theme.tertiaryColor};
    border-radius: 20px;

    opacity: 0;
    animation: ${kf} 2s ease-in-out forwards;
`;

export default function Description(props) {
    const {explanation} = props;

    return (
        <Explanation>{explanation}</Explanation>
    );
}