import React, { Fragment } from 'react';

const Slider = ({id, length, onChange}) => {

    return(
        <Fragment>
            <input id={id} type="range" min="10" max="50" value={length} onChange={(event) => onChange(event.target.value)} step={5}></input>
            <input type="text" value={length} onChange={(event) => onChange(event.target.value)}></input>
        </Fragment>
    )
}

export default Slider;