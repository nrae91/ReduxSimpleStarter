import React, {Component} from "react";

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = {term: ''};
    }

    render () {
        return ( 
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})}
                />;
                <div>User typed the following {this.state.term}</div>
            </div>
        );
    }
}

export default SearchBar;