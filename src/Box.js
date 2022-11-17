import './Box.css';

function Box(props) {
  const { boxHeight, boxWidth, boxColor, removeBox, id } = props;
  return (
    <div className="Box">
      <div 
        className="box" 
        style={{
          height: boxHeight,
          width: boxWidth,
          backgroundColor: boxColor
        }}>
      </div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;