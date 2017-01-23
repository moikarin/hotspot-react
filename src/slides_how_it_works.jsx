import React from 'react';
import Highlight from 'react-highlight';
import { Slide, Markdown, Image } from './component_lib.jsx';
import * as decor from './sysart_decor.jsx';


export const modifyingDom = 
    <Slide flavor={decor.nologo}>
      <h1>Modifying the DOM</h1>
    	<Image src="img/dom_diff.png" />
    </Slide>;


export const virtualDomDiff = 
    <Slide flavor={decor.nologo}>
      <h1>Virtual DOM</h1>
      <p>React computes the minimal set of updates and applies them
         to the browser DOM in an optimized way.</p>
      <Image src="img/vdom_diff.png" />
    </Slide>;


export const reactComponents =
	<Slide flavor={decor.normal}>
		<Markdown>{`
# UI Components

- Declarative, Interactive
- Reusable, Composable
- Component hierarchy
    	`}</Markdown>
        <Image height='35vh' src='img/components2.png' />
    </Slide>;


export const jsxSyntax =
	<Slide flavor={decor.normal}>
		<h1>JSX</h1>
    <p>Looks like a template ...</p>
        <Highlight className='javascript'>
{`render() { 
  const randomNotes = generateSymphony();
  return <Slide flavor={decor.normal}>
           <h1>Not just divs and spans...</h1>
           <LiveStaff notes={randomNotes}/>
           <Highlight className='javascript'>...</Highlight>
         </Slide>; 
};`}
        </Highlight>
    <p>... but is actually code.</p>
    </Slide>;


export const dataflowDrawing = 
    <Slide flavor={decor.nologo}>
        <h1>One-way dataflow</h1>
        <Image src='img/dataflow.png' height='60vh' />
    </Slide>;


export const dataflowCode = 
    <Slide flavor={decor.normal}>
        <h1>One-way dataflow</h1>
        <Highlight>{
`const App = (props) => {
  const user = props.user;
  return 
    <div>
      <TopBar location={props.location} user={user.info} />
      <DataGraph data={props.data} prefs={user.prefs} />
      <StatusBar status={props.status} />
    </div>;
}`
        }</Highlight>
    </Slide>;


export const actions = 
    <Slide flavor={decor.normal}>
        <Markdown>{`
# Synthetic events

- Cross-browser wrapper around the native event
- Same interface as the browser's event
- Events work identically across all browsers
- Event delegation - React routes events to components
        `}</Markdown>
        <Highlight>{
`handleChange(event) { ... },
render() { 
  return 
    <input type="text" ... onChange={this.handleChange} />;
  }`
        }</Highlight>
    </Slide>;


export const stateCode = 
    <Slide flavor={decor.normal}>
        <h2>UI component state</h2>
        <Highlight>{`
const ImageSlideShow = React.createClass({
  getInitialState() {
    return { index: 0 };
  },
  next() {
    const idx = this.state.index + 1;
    if(idx === this.props.files.length) return; // done
    this.setState({ index: idx });
    this.timer = window.setTimeout(this.next, this.time());
  },
  ...      `}</Highlight>
    </Slide>;


export const stateDrawing = 
    <Slide flavor={decor.nologo}>
        <h2>UI component state</h2>
        <Image src='img/state.png' height='60vh' />
    </Slide>;


const preStyle = {
    lineHeight: '200%',
    fontSize: '2vw'
};

export const lifecycle = 
    <Slide flavor={decor.normal}>
        <h1>Component lifecycle callbacks</h1>
        <pre style={preStyle}>
{`    void componentWillMount()  
    void componentDidMount()  
    void componentWillUnmount()  
    void componentWillReceiveProps(nextProps)  
    boolean shouldComponentUpdate(nextProps, nextState)  
    void componentWillUpdate(nextProps, nextState)  
    void componentDidUpdate(prevProps, prevState)
        `}</pre>
    </Slide>;

