import './Box.css';

function Box(props) {
  const { boxHeight, boxWidth, boxColor, removeBox, id } = props;
  return (
    <div className="Box">
      <div 
        className="box" 
        style={{
          height: `${boxHeight}em`,
          width: `${boxWidth}em`,
          backgroundColor: boxColor
        }}>
      </div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;