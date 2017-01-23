import React from 'react';
import Highlight from 'react-highlight';
import * as decor from './sysart_decor.jsx';
import { Slide, Markdown, Image, ImageSlideShow } from './component_lib.jsx';


export const soHot = () => { 
    const imageList = [
        'img/so_hot_2007.png',
        'img/so_hot_2009.png',
        'img/so_hot_2012.png',
        'img/so_hot_2013.png',
        'img/so_hot_2014.png',
        'img/so_hot_2015.png'
    ];
    return  <Slide flavor={decor.normal}>
               <ImageSlideShow files={imageList} time={2} key='1' />
            </Slide>;
};


export const soHotX = () => { 
    const imageList = [
        'img/sohot_x/so_athena.jpg',
        'img/sohot_x/so_openlook.jpg',
        'img/sohot_x/so_motif.jpg',
        'img/sohot_x/so_xforms.jpg',
        'img/sohot_x/so_qt.jpg',
        'img/sohot_x/so_fltk.jpg',
        'img/sohot_x/so_gtk.jpg'
    ];
    return  <Slide flavor={decor.normal}>
               <ImageSlideShow files={imageList} time={2} key='2' />
            </Slide>;
};


export const history =  
    <Slide flavor={decor.normal}>
        <h1>History of React</h1>
            <ul>
                <li>Created by Jordan Walke at Facebook</li>
                <li>First deployed 2011 - Facebook Newsfeed</li>
                <li>Open Sourced 2013
                    <ul>
                        <li>3-clause BSD (with addendum about patents)</li>
                    </ul>
                </li>
                <li>Rise to popularity</li>
                <li>Today:
                    <ul>
                        <li>Facebook, Instagram, Netflix, Paypal, Yahoo,
                            Atlassian, Imgur, NFL, AirBnb, ...
                        </li>
                    </ul>
                </li>
            </ul>
    </Slide>;


export const theProblem = 
    <Slide flavor={decor.normal}>
        <Markdown>{`
# Building large apps with data that changes over time

Browsers _evolved_ into a rich UI platform. 

Modifying the DOM?? Layout thrashing, reflow, repaint

*"At Facebook we had a traditional kind of MVC data-binding system
and as we started to build with it the complexity snowballed 
to the point where we couldn't maintain our applications anymore..."*
--Pete Hunt
        `}</Markdown>
    </Slide>;
