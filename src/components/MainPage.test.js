import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
	const mockProps = {
		onFetchChars: jest.fn(),
		chars: [],
		search: '',
		isPending: false,
	}
	wrapper = shallow(<MainPage { ...mockProps } />)
});

it('renders MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
});

it('filters characters correctly', () => {
	const mockProps2 = {
		onFetchChars: jest.fn(),
		chars: [{
			key: 3,
		    id: 3,
	      	name: 'Boba Fett',
	      	birth: '49BBY',
	      	homeworld: 'Kamino',
	      	mass: '79',
	      	gender: 'male',
	      	starships: 'Slave-1',
	      	vehicles: 'Sand speeder',
	}],
		search: 'B',
		isPending: false,
	}

	const wrapper2 = shallow(<MainPage { ...mockProps2 } />)
	expect(wrapper2.instance().filteredChars()).toEqual([
		{
			key: 3,
		    id: 3,
	      	name: 'Boba Fett',
	      	birth: '49BBY',
	      	homeworld: 'Kamino',
	      	mass: '79',
	      	gender: 'male',
	      	starships: 'Slave-1',
	      	vehicles: 'Sand speeder',
		}
	])
});