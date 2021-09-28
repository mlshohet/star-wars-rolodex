import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render CardList component', () => {
	const mockChars = [{
		key: 3,
	      id: 3,
      	name: 'Boba Fett',
      	birth: '49BBY',
      	homeworld: 'Kamino',
      	mass: '79',
      	gender: 'male',
      	starships: 'Slave-1',
      	vehicles: 'Sand speeder',
	}];
	expect(shallow(<CardList people={mockChars}/>)).toMatchSnapshot();
});
