import React, { useState } from 'react';
import { useEffect } from 'react';

const Input = ({ label, type = 'text', initialValue = '', onChange, simple }) => {
    const [value, setValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);





    const handleInputChange = (event) => {
        setValue(event.target.value);

        if (onChange) {
            onChange(event.target.value);
        }
        setIsEditing(true);
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="form-wrap">
            <div
                style={{
                    border: `2px solid ${isEditing ? '#007bff' : '#ced4da'}`,
                    borderRadius: '0.25rem',
                    padding: '1rem',
                    paddingTop: '1.5rem',
                    borderRadius: '10px',
                    paddingBottom: '0.75rem',
                    outline: 'none',
                    fontWeight: 600,
                    transition: 'border-color 0.2s',
                }}
            >
                <input
                    type={type}
                    style={{
                        border: 'none',
                        outline: 'none',
                        width: '80%',
                        fontSize: '1rem',
                        fontWeight: '600',
                        padding: '0',
                        color: '#212529',
                    }}
                    readOnly={simple ? '' : !isEditing}
                    onChange={handleInputChange}
                    value={value}
                    required
                />
                <label
                    style={{
                        position: 'absolute',
                        top: isEditing || value != "" ? '5px' : '1.2rem',
                        left: '1rem',
                        fontSize: isEditing || value != "" ? '0.75rem' : '1rem',
                        pointerEvents: 'none',
                        transition: 'all 0.2s',
                        color: isEditing ? '#007bff' : '#000',
                        color: simple ? "#c0c0c0" : "#c0c0c0",
                        fontWeight: '600',
                        zIndex: -1
                    }}
                >
                    {label}
                </label>
            </div>
            <button
                style={{
                    right: '10px',
                    position: 'absolute',
                    top: '1.2rem',
                    fontSize: '0.75rem',
                    color: '#007bff',
                    fontWeight: '600',
                    zIndex: 1,
                    cursor: 'pointer',
                    display: simple ? "none" : "block"
                }}
                onClick={handleEditClick}
            >
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </div >
    );
};

export default Input;