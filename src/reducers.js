import { 
	CHANGE_SEARCH,
	FETCH_CHARS_PENDING,
	FETCH_CHARS_SUCCESS,
	FETCH_CHARS_FAIL,
} from './constants';

const initialStateSearch = {
	search: '',
};

export const searchChars = (state=initialStateSearch, action) => {
	switch(action.type) {
		case CHANGE_SEARCH:
			return { ...state, search: action.payload }
		default:
			return state;
	}
}

const initialStateChars = {
	isPending: false,
	chars: [],
	error: '',
}

export const fetchChars = (state=initialStateChars, action) => {
	switch(action.type) {
		case FETCH_CHARS_PENDING:
			return { ...state, isPending: true }
		case FETCH_CHARS_SUCCESS:
			return { ...state, chars: action.payload, isPending: false }
		case FETCH_CHARS_FAIL:
			return { ...state, error: action.payload, isPending: false }
		default:
			return state;
	}
}
