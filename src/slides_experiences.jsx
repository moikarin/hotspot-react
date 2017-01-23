import React from 'react';
import Highlight from 'react-highlight';
import { Slide, Markdown, Image } from './component_lib.jsx';
import * as decor from './sysart_decor.jsx';


export const pros = 
    <Slide flavor={decor.normal}>
        <h1>Pros</h1>
        <ul>
            <li>Netflix: <i>Our decision to adopt React was influenced by a number of factors,
                most notably: 
                <ol style={{paddingLeft: '3em'}}>
                    <li>startup speed</li>
                    <li>runtime performance</li>
                    <li>modularity.</li>
                </ol>
            </i></li>
            <li>Popular, large ecosystem. Will not disappear overnight :-)</li>
            <li>Can render on the server</li>
            <li>Can be piecewise refactored into an existing application.</li>
            <li>Makes no assumptions about the rest of your stack</li>
        </ul>
    </Slide>;


export const cons =
	<Slide flavor={decor.normal}>
        <h1>Cons</h1>
        <ul>
            <li>Compared to many other web frameworks... it's not.</li>
            <li>Learning curve</li>
            <li>Perhaps not the right choice if the app does not need
                reusable components or the data is not changing much.</li>
            <li>A real(ish) DOM is still needed for testing.</li>
            <li>Challenges: animation? But there are add-ons for that.</li>
        </ul>
    </Slide>;


export const myExperiences = 
    <Slide flavor={decor.normal}>
        <h1>Gut feeling ...</h1>
        <ul>
            <li>I like it. Making components and composing them is easy.</li>
            <li>Components are just JS code so we have all the programming language
                power to work with them.</li>
            <li>Excellent error messages.</li>
            <li>Biggest struggle for me is still CSS/layout. I'm no web designer :-)</li>
        </ul>
    </Slide>;


export const sysartExperiences = 
    <Slide flavor={decor.normal}>
        <h1>Experiences at Sysart</h1>
        <p>The xxxxx team is using React to build a UI where
           everything is dynamic. React has been in use for 1 year.</p>
        <ul>
            <li>Fun!</li>
            <li>It does make things simpler, after you <i>get</i> it</li>
            <li>React is still changing</li>
            <li>Good supply of third party components: Fluxible, 
                FixedDataTable, react-dropzone, react-dnd</li>
        </ul>
    </Slide>;


export const ecosystemData =
    <Slide flavor={decor.normal}>
        <Markdown>{`
# Ecosystem: data
- flux / redux / reflux / fluxxor / fluxible / ...
- Relay - GraphQL queries
        `}</Markdown>
    </Slide>;


export const ecosystemRouter =
    <Slide flavor={decor.normal}>
        <Markdown>{`
# Ecosystem: react-router
- Keep your URL in sync in a single page app
- Lazy loading code. Useful in a large application
        `}</Markdown>
    </Slide>;


export const ecosystemComponents =
    <Slide flavor={decor.normal}>
        <Markdown>{`
# Ecosystem: UI components
- fixed-data-table, reactable
- react-dnd
- react-dropzone
- react-highlight
- draft.js – Rich text editor framework
- React D3 – Charts
- ... and more ... 
        `}</Markdown>
    </Slide>;


export const ecosystemComponentLibs =
    <Slide flavor={decor.normal}>
        <Markdown>{`
# Ecosystem: UI component libraries
- Elemental UI
- React-Bootstrap
- React components by Khan Academy
        `}</Markdown>
    </Slide>;


export const ecosystemNative =
    <Slide flavor={decor.normal}>
        <Markdown>{`
# Ecosystem: React Native
The React dev experience for Android and iOS.
- _learn once, write anywhere_ → well, I don't know. It uses platform native components so you still have to learn those.
- _Native perf_
- It's javascript so apps can be updated on the fly.
        `}</Markdown>
    </Slide>;


export const ecosystemDevtools =
    <Slide flavor={decor.normal}>
        <Markdown>{`
# Ecosystem: Development tools
- react-devtools - see the react components in browser devtools
- react-transform - hot reloading, debug inspector
        `}</Markdown>
    </Slide>;


export const motifComponents =
    <Slide flavor={decor.normal}>
        <i>... however, Motif steps outside of the Xt model by creating
        compound objects out of several widgets and then expecting you
        to treat them as if they were a single object.</i>
        <br />&nbsp;&nbsp;&nbsp;&nbsp;--Motif Programming Manual
        <Image src="img/gui_libs_on_X.png" />
    </Slide>;


export const info =
    <Slide flavor={decor.normal}>
        <Markdown>{`
# More information
- [React - a javascript library for building user interfaces](https://facebook.github.io/react/)
- [Youtube - Introduction to React.js](https://www.youtube.com/watch?v=XxVg_s8xAms)
- [How the virtual DOM diff works](http://calendar.perfplanet.com/2013/diff/)
- [React Native](https://facebook.github.io/react-native/)
- [Om - A ClojureScript interface to Facebook's React](https://github.com/omcljs/om)
        `}</Markdown>
    </Slide>;


export const last =
    <Slide flavor={decor.normal}>
        <Markdown>{`
# Thanks!
Some final words...

React is not the last word on web development. 
Somebody will do it better. Competition is good.

The same ideas are already being implemented by others: 
- elm-html uses a virtual DOM
- Ember: _React-inspired improvements to the programming model_
        `}</Markdown>
    </Slide>;
