import React from "react";
import PropTypes from 'prop-types';

const RadioButton = ({
    name, selectedItem, onChange }) => {

    const isChecked = name === selectedItem;

    return (
        <div >
            <input
                type="radio"
                name={name}
                id={name}
                value={name}
                checked={isChecked} onChange={onChange}
            />
            <label htmlFor={name}>{name}</label>
        </div>
    );
};
export default RadioButton;

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    selectedItem: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};