import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {

    const INITIAL_STATE = [
        { id: uuid(), height: '10em', width: "10em", color: "orange" },
        { id: uuid(), height: '5em', width: "20em", color: "teal" }
      ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }

    const removeBox = (id) => {
    setBoxes(boxes.filter(b => b.id !== id))
    }

    return (
    <div>
        <h3>Box List</h3>
        <NewBoxForm addBox={addBox} />    
        <div>
        {boxes.map(({ id, height, width, color }) => 
            <Box 
                id={id} 
                boxHeight={height} 
                boxWidth={width} 
                boxColor={color} 
                key={id} 
                removeBox={removeBox}/>)}
        </div>
        <div onClick={console.log("div boxes", boxes)}></div>

    </div>
    )
}

export default BoxList;