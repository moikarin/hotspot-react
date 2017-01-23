var React = require('react');


const Note = function (props) {
  // This is a mess... the scaling logic should be extracted
  // but this does it for demo purposes.
  const spacing = props.scaling.spacing;
  const bottom = props.scaling.bottomLine;
  const x = 6 * spacing + props.time * 4 * spacing;
  const midiY = Math.floor(props.pitch / 2);
  const y = bottom - (midiY - 32 - 2) * spacing * 0.5;
  const r = spacing / 2;
  const stemX = x + r;
  const stemLength = 3.5 * spacing;
  const width = 4;
  return <g>
    <ellipse cx={x} cy={y} rx={r} ry={0.7*r} 
        stroke="black" strokeWidth={width} fill="black" />
    <line x1={stemX} y1={y} x2={stemX} y2={y - stemLength} 
        stroke="black" strokeWidth={width} />
  </g>;
};

const StaffLine = function(props) {
  const y = props.y;
  return <line x1={0} y1={y} x2={props.width} y2={y} stroke="grey" strokeWidth="1" />
};

const StaffLines = function(props) {
  const spacing = props.spacing;
  const offset = 5 * spacing;
  const y1 = offset;
  const lines = [0, 1, 2, 3, 4]
          .map(n => y1 + n*spacing)
          .map(y => <StaffLine key={y} width={props.width} y={y} />);
  return <g>{lines}</g>;
};

const Staff = function(props) {
  const spacing = 20;
  const height = (4+4+4) * spacing;
  const scaling = { spacing, bottomLine: 8 * spacing };
  const width = 1000;
  const viewbox = `0 0 ${width} ${height}`;
  const notes = props.notes.map( (pitch, index) => 
    <Note pitch={pitch} time={index} scaling={scaling} key={index} />
  );

  return <svg viewBox={viewbox} width='80%' heigth='auto'>
           <StaffLines width={width} spacing={spacing} />
           {notes}
         </svg>;    
};

export default Staff;
