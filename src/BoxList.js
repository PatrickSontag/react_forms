import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {

    const INITIAL_STATE = [
        { id: uuid(), height: '100px', width: "300px", color: "orange" },
        { id: uuid(), height: '300px', width: "400px", color: "pink" }
      ]
      const [boxes, setBoxes] = useState(INITIAL_STATE);
      const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
        console.log("boxes", boxes);
      }
      return (
        <div>
          <h3>Box List</h3>
          <NewBoxForm addBox={addBox} />
          <div>
            {boxes.map(({ id, height, width, color }) => <Box id={id} boxHeight={height} boxWidth={width} boxColor={color} key={id} />)}
          </div>
    
        </div>
      )

    const [ state, setState ] = useState(null);
    console.log(state);
    return (
        <div className="BoxList">
            <NewBoxForm />
            <Box 
                boxHeight="100px" 
                boxWidth="200px" 
                boxColor="red" 
                />
        </div>
    );
}

export default BoxList;