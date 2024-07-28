import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const DropDown = ({ data, onSelect, ASC, initialOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        initialOption ||
            (ASC
                ? data.sort((a, b) => a.name.localeCompare(b.name))[0].name
                : data[0].name)
    );

    const toggleDropDown = () => setIsOpen(!isOpen);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    useEffect(() => {
        if (initialOption) {
            setSelectedOption(initialOption);
        }
    }, [initialOption]);

    const sortedData = ASC
        ? [...data].sort((a, b) => a.name.localeCompare(b.name))
        : data;

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropDown}>
                {selectedOption}
                <span className="dropdown-icon">{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    {sortedData.map((item, index) => (
                        <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleOptionSelect(item.name)}
                            onMouseOver={(e) =>
                                (e.target.style.backgroundColor = "#d3cdcd")
                            }
                            onMouseOut={(e) =>
                                (e.target.style.backgroundColor = "#fff")
                            }
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

DropDown.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            abbreviation: PropTypes.string,
        })
    ).isRequired,
    onSelect: PropTypes.func.isRequired,
    ASC: PropTypes.bool,
    initialOption: PropTypes.string,
};

export default DropDown;
