import React, { useState } from 'react';
import './CustomSelect.css'
export interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    options: Option[];
    onSelect: (option: Option) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div className="custom-select">
            <div className="select-header" onClick={handleToggle}>
                <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className="select-options">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="select-option"
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;