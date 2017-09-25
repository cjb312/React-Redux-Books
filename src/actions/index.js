export function selectBook (book) {
	//selectBook is an action create it needs to return and action
	// an object with a type property
	return {
		// type always uppercase 
		type: 'BOOK_SELECTED',
		payload: book
	}
}