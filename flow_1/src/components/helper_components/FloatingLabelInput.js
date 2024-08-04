// src/components/FloatingLabelInput.js
import React, { useState } from 'react';

const FloatingLabelInput = ({ label, type, value, onChange, id }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e) => {
        setIsFocused(false);
        setHasValue(e.target.value !== '');
    };

    return (
        <div className="relative w-full mb-3">
            <input
                type={type}
                id={id}
                value={value}
                className={`block w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200 ${isFocused || hasValue ? 'pt-4 focus:ring-black' : ''}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={onChange}

            />
            <label
                htmlFor={id}
                className={`text-gray-500 absolute left-3 text-xs top-2 transition-all duration-200 ${isFocused || hasValue ? 'text-bsm -top-3 bg-white   px-1' : ''}`}
            >
                {label}
            </label>
        </div>
    );
};

export default FloatingLabelInput;
