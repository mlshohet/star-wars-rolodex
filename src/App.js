import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainPage from './components/MainPage';

import { setSearch, fetchChars } from './actions';

const mapStateToProps = state => ({
	search: state.searchChars.search,
	chars: state.fetchChars.chars,
	isPending: state.fetchChars.isPending,
	error: state.fetchChars.error,
});

const mapDispatchToProps = dispatch => ({
	onSearchChange: event => dispatch(setSearch(event.target.value)),
	onFetchChars: () => dispatch(fetchChars()),
});

class App extends Component {
  	render() {
  		return <MainPage { ...this.props } />
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
