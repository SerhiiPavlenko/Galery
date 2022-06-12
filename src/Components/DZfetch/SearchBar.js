import React,{Component} from "react";
import './styles.css'

export default class SearchBar extends Component {

    state = {
        initialValue: ''
    }

    handleChange = e => {
        this.setState({
            initialValue: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.initialValue)
        this.props.onSubmit(this.state.initialValue)
        this.setState({initialValue: ''})
    }


    render() {
        return (
            <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button type="submit" className="SearchForm-button ">
        <span className="SearchForm-button-label">Search</span>
        </button>

        <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.initialValue}
        onChange={this.handleChange}
        />
       </form>
       </header>
        )
    }
}