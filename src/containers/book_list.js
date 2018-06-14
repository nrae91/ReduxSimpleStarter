import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList () {
        return (
            this.props.books.map((book, i) => {
                return (
                    <li className="list-group item"
                        key={i}
                    >
                        {book.title}
                    </li>
                );
            })
        );
    }

    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

function mapStateToProps (state) {
    return {
        books: state.books
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);