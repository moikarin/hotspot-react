import React from 'react';
import { plain, Markdown, Image, Slide } from './component_lib.jsx';
import * as decor from './sysart_decor.jsx';


export const title = 
	<Slide flavor={decor.plain}>
	    <Image src='img/hotspot_logo_1024b.png' />
 	    <Image src='img/logo_react.png' height='25vh' />
	    <Image src='img/react_desc.png' height='20vh' />
	</Slide>;


export const whoAmI = 
	<Slide flavor={decor.nologo}>
 		<Markdown>{`
# Marko Oikarinen
+ Full stack dev/architect/coach/whatever at [Sysart Oy](http://sysart.fi/)
+ Twitter  [@whoman4says](https://twitter.com/whoman4says)
+ Blog  [scribblelayer.com](http://scribblelayer.com/)
+ Frequent consumer of UI libraries and frameworks
		`}</Markdown>
		<Image src='img/uitech-tags-3.png' height='45vh' />
	</Slide>;


export const exampleSystem = 
    <Slide fullscreen={true} flavor={decor.plain} >
        <Image src="img/example-system.png" />
    </Slide>;

