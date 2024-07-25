import React from 'react';

function Box({id, width, height, backgroundColour, removeBox}){
    const handleRemove=()=>{
        removeBox(id);
    }

    return (
        <div>
            <div style={{width: `${width}px`, height: `${height}px`, backgroundColor: backgroundColour}}></div>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default Box;