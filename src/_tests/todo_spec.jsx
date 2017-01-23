import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

describe('something', () => {

  const Marky = (props) => {
  	return <div>foo</div>;
  };

  it('todo', () => {
	const comp = ReactTestUtils.renderIntoDocument(<Marky />);
	expect(1).equal(1);		
  });

});