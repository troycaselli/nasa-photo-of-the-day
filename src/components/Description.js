import React from 'react';

export default function Description(props) {
    const {explanation} = props;

    return (
        <p>{explanation}</p>
    );
}