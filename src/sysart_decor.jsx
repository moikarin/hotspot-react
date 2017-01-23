import React from 'react';


//
// Upper left corner orange triangle
//
const Triangle = () => {
  const style = {
    position: 'absolute',
    width: 0,
    height: 0,
    borderTop: '30vh solid #F4994A', 
    borderRight: '7vw solid transparent' 
  };
  return <div style={style} />;
};


//
// Lower right corner company logo
//
const Logo = () => {
  const style = {
    position: 'fixed',
    right: 0,
    bottom: 0,
    width: '20vw',
    height: 'auto',
    padding: '1vw 1vw 1vw 1vw'
  };
  return <img style={style} src="img/sysart_2125x500.png" />;
};


//
// Slide flavors - A flavor is a collection of decorative components on the slide
//
export const plain = [];
export const normal = [<Triangle key='1' />, <Logo key='2' />];
export const nologo = [<Triangle key='2' />];
