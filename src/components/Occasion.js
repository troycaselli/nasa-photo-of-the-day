import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 40%;
    @media (max-width: 500px) {
        width: 80%;
      }
`;

const H2 = styled.h2`
    margin: 3%;
    @media (max-width: 500px) {
        margin: 1%;
    }
`;

const H4 = styled.h4`
    margin: 3%;
    @media (max-width: 500px) {
        margin: 1% 0 3% 0;
    }
`;

export default function Occasion(props) {
    const {title, date} = props;

    return (
        <Container>
            <H2>{title}</H2>
            <H4>{date}</H4>
        </Container>
    );
}