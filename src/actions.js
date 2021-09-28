import { 
	CHANGE_SEARCH,
	FETCH_CHARS_PENDING,
	FETCH_CHARS_SUCCESS,
	FETCH_CHARS_FAIL,
} from './constants';

export const setSearch = text => ({
	type: CHANGE_SEARCH,
	payload: text,
});

export const fetchChars = () => dispatch => {
	dispatch({ type: FETCH_CHARS_PENDING });
	fetch('https://swapi.dev/api/people')
		.then(res => res.json())
		.then(data =>
			dispatch({
				type: FETCH_CHARS_SUCCESS,
				payload: data.results,
			})
		)
		.catch(err => 
			dispatch({ 
				type: FETCH_CHARS_FAIL,
				payload: err,
		}));
};