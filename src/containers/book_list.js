import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators} from 'redux';

class BookList extends Component {
    renderList(){
        //console.log(this.props)
        //return list of books from state
        return this.props.books.map((book) => {
            return (
                // onClick will lunch Action
                <li onClick={() => {this.props.selectBook(book)}} key={book.title} className="list-group-item">{book.title}</li>
            );
        })
    }
	
	// container is a react component that has a direct connection to the sate managed by redux
	// also has direct access to the state thats produced by redux
	// only create containers for components that care about a particular piece of state
	render(){
		return (
				<ul className="list-group col-sm-4">
					{this.renderList()}
				</ul>
			)
	}
}

//taking state and mapping it as props to the conatiner
function mapStateToProps(state) {
	//what gets returned will show up as props inside of book list
	return {
		books: state.books
	}
};

//anything returned from this function will end up as props on the book list container
function mapDispatchToProps(dispatch) {
	//Whenever selectBook is called the result should be passed to all reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote bookList from component to a conatiner
//needs to know about new dispatch method select book and make it availble as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);