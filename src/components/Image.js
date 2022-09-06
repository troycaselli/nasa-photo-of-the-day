import React from 'react';

export default function Image(props) {
    const {image, title} = props;

    return (
        <img src={image} alt={'image of ' + title}/>
    );
}