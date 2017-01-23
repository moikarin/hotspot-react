import React from 'react';
import Remarkable from 'remarkable';

//
// Presentation takes 'slides': an array of components
// and knows the currently visible slide.
//
export const Presentation = React.createClass({
  getInitialState() {
      return { index: 0 };
  },
  prev() {
    const index = Math.max(0, this.state.index - 1); 
    this.setState({ index: index });
  },
  next() {
    const index = Math.min(this.state.index + 1, this.props.slides.length - 1); 
    this.setState({ index: index });
  },
  render() {
      return this.props.slides[this.state.index];
  }
});


export const Image = (props) => {
    const fillParent = {
        maxWidth: '90%',
        maxHeight: '90%',
        display: 'block',
        margin: '1em auto auto auto'
    };
    const sized = (height) => {
        return {
            width: 'auto',
            height: height,
            display: 'block',
            margin: 'auto'
        };
    };
    const style = props.height ? sized(props.height) : fillParent;
    return <img src={props.src} style={style} />
};


//
// Props: files -> an array of image file names
//        time  -> seconds to show each image
//
export const ImageSlideShow = React.createClass({
    getInitialState() {
        return { index: 0 };
    },
    slideMs() { return this.props.time * 1000; },
    next() {
        const index = this.state.index + 1;
        if(index === this.props.files.length) return; // done
        this.setState({ index: index });
        this.timer = window.setTimeout(this.next, this.slideMs());
    },
    componentDidMount() {
        this.timer = window.setTimeout(this.next, this.slideMs());
    },
    componentWillUnmount() {
        window.clearTimeout(this.timer);
    },
    render() {
        return <Image src={this.props.files[this.state.index]} />;
    }
});


const markdownRenderer = new Remarkable();

//
// Notice how React uses its API to point out things
// that can be potentially dangerous.
//
export const Markdown = (props) => {
    const html = markdownRenderer.render(props.children);
    return <div dangerouslySetInnerHTML={{__html: html}} />;
};


//
// props: children   -> slide content is put in to child elements
//        flavor     -> add decorative components such as a company logo
//        fullscreen -> indicates fullscreen content. Margins are removed.
//
export const Slide = (props) => { 
    const slideStyle = {
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
    };
    const normalContent = {
        width: '70vw',
        height: '85vh',
        padding: '7vh 0 8vh 0',
        margin: '0 auto 0 auto'
    };
    const fullscreenContent = {
        width: '100vw',
        height: '100vh',
        padding: '0 0 0 0',
        margin: '0 0 0 0'
    };
    const contentStyle = props.fullscreen ? fullscreenContent : normalContent;
    return  <div style={slideStyle}>
                {props.flavor}
                <div style={contentStyle}>{props.children}</div>
            </div>; 
};
