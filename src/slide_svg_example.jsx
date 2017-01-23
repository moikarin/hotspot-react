import React from 'react';
import Highlight from 'react-highlight';
import { Slide } from './component_lib.jsx';
import Staff from './svg_staff.jsx';
import * as decor from './sysart_decor.jsx';


const AddButton = (props) => {
  const style = {
    width: '4vw',
    height: 'auto',
    position: 'relative', // fiddle, fiddle, I'm no designer :-)
    top: '-6vh',
    left: '2vw',
  };
  return <img src="img/plus_blue.png" onClick={props.action} style={style} />
};

const LiveStaff = React.createClass({
  notes() { return this.props.notes; },
  getInitialState() {
      return { index: 0 }; // how many notes to show
  },
  advance() {
    const newIndex = (this.state.index + 1) % (this.notes().length + 1);
    this.setState({ index: newIndex });
  },
  render() {
    return  <span>
              <Staff notes={this.notes().slice(0, this.state.index)} />
              <AddButton action={this.advance} />
            </span>;
  }
});

const svgExample = () => { 
  const notes = [64,68,64,72,78,72,68,64]; // MIDI note numbers
  return  <Slide flavor={decor.nologo}>
            <h1>Not just divs and spans...</h1>
            <LiveStaff notes={notes}/>
            <Highlight className='javascript'>
{`const Note = function (props) {
  const x = ...
  const y = ...
  return <g>
    <ellipse cx={x} cy={y} rx={r} ry={0.7*r} 
        stroke="black" strokeWidth={width} fill="black" />
    <line x1={stemX} y1={y} x2={stemX} y2={y - stemLength} 
        stroke="black" strokeWidth={width} />
  </g>;
};`}
            </Highlight>
          </Slide>; 
};

export default svgExample;
