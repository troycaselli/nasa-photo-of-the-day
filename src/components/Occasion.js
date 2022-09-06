import React from 'react';

export default function Occasion(props) {
    const {title, date} = props;

    return (
        <div className="occasion">
            <h2>{title}</h2>
            <h4>{date}</h4>
        </div>
    );
}