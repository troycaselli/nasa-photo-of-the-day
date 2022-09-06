import React from 'react';

export default function Occasion(props) {
    const {title, date} = props;

    return (
        <div>
            <h2>{title}</h2>
            <h3>{date}</h3>
        </div>
    );
}