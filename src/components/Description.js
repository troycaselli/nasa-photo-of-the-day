import React from 'react';
import styled from 'styled-components';

const Explanation = styled.p`
    margin: 5% 6.67%;
    padding: 2.5% 4%;
    display: flex;
    justify-content: center;
    text-align: justify;
    border: 2px solid ${props => props.theme.tertiaryColor};
    border-radius: 20px;
`;

export default function Description(props) {
    const {explanation} = props;

    return (
        <Explanation>{explanation}</Explanation>
    );
}