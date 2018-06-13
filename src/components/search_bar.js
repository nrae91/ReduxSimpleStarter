import React, {Component} from "react";

class SearchBar extends Component {
    render () {
        return <input onChange={event => this.setState({term: event.target.value})}/>;
    }
}

export default SearchBar;