import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList(){
    const [boxes, setBoxes]=useState([]);

    const addBox=(newBox)=>{
        setBoxes(boxes=>[...boxes, newBox]);
    };

    const removeBox=(id)=>{
        setBoxes(boxes=>boxes.filter(box=>box.id!==id));
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({id, width, height, backgroundColor})=>(
                <Box key={id} id={id} width={width} height={height} backgroundColor={backgroundColor} removeBox={removeBox} />
            ))}
        </div>
    );
}

export default BoxList;