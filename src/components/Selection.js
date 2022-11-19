import React from 'react';
import { useState } from 'react';

const Selection = ({ applyColor }) => {
    const [color, setColor] = useState({ background: '' });
    const handleClick = (val) => {
        setColor(val)
    }
    return (
        <div className="fix-box" style={{ backgroundColor: `${color.background}` }} onClick={() => applyColor(handleClick)}>
            <h2 className="subheading">Selection</h2>
        </div>
    );
};

export default Selection;
