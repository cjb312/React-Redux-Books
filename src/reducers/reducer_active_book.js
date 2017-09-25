// reducers get 2 arguments current state and action
// only called when action occurs
// state argument is not application state, only the state, this reducer is repsonible for 
// state = null (when argument comes in undefined set it to null)

export default function (state = null, action) {
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload;
	}
	return state;
}

//make containers when want to have component that can touch the redux state directly