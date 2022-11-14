import './Box.css';

function Box(props) {
  const { boxHeight, boxWidth, boxColor } = props;
  return (
    <div className="Box" style={{
      // height: "200px",
      // width: "100px",
      // backgroundColor: "green"
      height: boxHeight,
      width: boxWidth,
      backgroundColor: boxColor
      }}>
      <button>X</button>
    </div>
  );
}

export default Box;