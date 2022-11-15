import './BoxList.css';
import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
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