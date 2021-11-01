import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';

import './MainPage.css';

class MainPage extends Component {


	componentDidMount() {
		this.props.onFetchChars();
	}

	filteredChars = () => {
		return this.props.chars.filter(char => 
			char.name.toLowerCase().includes(this.props.search.toLowerCase())
		)
	}

  	render() {
  		const { isPending, onSearchChange } = this.props;
  		return isPending ? 
  			<div><h1>Loading</h1></div> :
	  		(
		       	<div className='tc'>
			          <h1 className='f1'>Star Wars Rolodex</h1>
			          <SearchBox searchChange={onSearchChange} />
			          <CardList people={this.filteredChars()} />
		        </div>
	  		);
  	}
}

export default MainPage;
