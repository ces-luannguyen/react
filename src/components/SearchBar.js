import React from 'react';
class SearchBar extends React.Component{
    state = {
        term: ''
    };

    onSearchTerm = (el) =>{
        this.setState({
            term: el.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.search1(this.state.term);
    }

    render(){
        return(
            <div>
                <h1>Search Bar</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" value={this.state.term} onChange={this.onSearchTerm} />
                </form>
            </div>

        )
    }
}
export default SearchBar;