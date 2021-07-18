import React, { Fragment } from 'react';

const CheckBox = ({onChange, id, isChecked, label}) => {

    return (
        <Fragment>
            <input type="checkbox" id={id} name={id} onChange={onChange} checked={isChecked}></input>
            <label htmlFor={id}>{label}</label>
        </Fragment>
    )
}
export default CheckBox;