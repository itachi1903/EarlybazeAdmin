import React, { useState, useEffect, useRef } from 'react';

const SortDropdown = ({ options, heading, handleOptionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null); // No default selection
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOption = (option) => {
        setSelectedOption(option); // Update the selected option correctly
        handleOptionSelect(option); // Call parent function with selected option
        setIsOpen(false);
        console.log(selectedOption,' : From sortDropdown')
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 bg-dark-700 text-white border border-[#25AE7A] px-4 py-2 rounded-full"
            >
                <span className='flex items-center gap-2'>
                    <i className="opacity-50 bi bi-arrow-down-up"></i>
                    <span>
                        <span className='opacity-50'>{heading}</span>
                        {selectedOption && (
                            <span className='text-[#25AE7A]'> : {selectedOption}</span>
                        )}
                    </span>
                </span>
                <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'} pl-2 text-xl`}></i>
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-theme-dark border border-gray-500 rounded-lg shadow-lg">
                    <ul className="py-2">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className={`flex items-center gap-3 px-4 py-2 cursor-pointer ${selectedOption === option.value ? 'text-green-400' : 'text-white'}`}
                                onClick={() => handleOption(option.value)}
                            >
                                <div className={`p-1 rounded-full ${selectedOption === option.value ? 'border border-green-400' : 'border border-white'}`}>
                                    <div className={`w-2 h-2 rounded-full ${selectedOption === option.value ? 'bg-green-400' : ''}`}>
                                    </div>
                                </div>
                                {option.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SortDropdown;
