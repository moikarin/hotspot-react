import React from 'react';
import ReactDOM from 'react-dom';
import { Presentation } from './component_lib.jsx';
import * as intro       from './slides_intro.jsx';
import * as background  from './slides_background.jsx';
import * as how         from './slides_how_it_works.jsx';
import * as experiences from './slides_experiences.jsx';
import svgExample       from './slide_svg_example.jsx';


const main = (doc) => {

  const mountroot = doc.getElementById('mountroot');

  const slides = [
    intro.title,
    intro.whoAmI,
    intro.exampleSystem,
    background.soHot(), // fn that creates a component
    background.history,
    background.theProblem,
    how.modifyingDom,
    how.virtualDomDiff,
  	how.reactComponents,
    how.jsxSyntax,
    how.dataflowDrawing,
    how.dataflowCode,
    how.actions,
    how.stateCode,
    how.stateDrawing,
    how.lifecycle,
    svgExample(),
    experiences.myExperiences,
    experiences.sysartExperiences,
    experiences.pros,
    experiences.cons,
    experiences.ecosystemData,
    experiences.ecosystemRouter,
    experiences.ecosystemComponents,
    experiences.ecosystemComponentLibs,
    experiences.ecosystemNative,
    experiences.ecosystemDevtools,
    background.soHotX(),
    experiences.motifComponents,
    experiences.info,
    experiences.last
  ];

  //
  // ReactDOM.render() returns a handle for controlling the component from the outside.
  // This is one way for the outside world to communicate with a React component.
  //
  const presentation = ReactDOM.render(<Presentation slides={slides} />, mountroot);
  const prev = () => { presentation.prev(); };
  const next = () => { presentation.next(); };

  const onKeydown = (event) => {
    if('ArrowLeft' === event.code) return prev();
    if('ArrowRight' === event.code) return next();
    if('Space' === event.code) return next();
  };

  window.addEventListener('keydown', onKeydown, false);
};


document.addEventListener('DOMContentLoaded', function(event) {
    main(document);
});
