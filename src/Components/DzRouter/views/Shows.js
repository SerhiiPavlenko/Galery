import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import SearchBox from "./SearchBox";
import tvApi from './tv-mazeApi'
import getQueryParams from "../../../utils/getQueryParams";
import '../../DZfetch/styles.css'

export default class Shows extends Component {
    state ={
        shows: [],
    }

    componentDidMount() {
        const {query} = getQueryParams(this.props.location.search);
        if(query) {
           this.fetchQuery(query)
        }
    }

    componentDidUpdate(prevProps,prevState) {
            const {query: prevQuery} = getQueryParams(prevProps.location.search)
            const {query: nextQuery} = getQueryParams(this.props.location.search)
           if(prevQuery !== nextQuery) {
            this.fetchQuery(nextQuery)
           }
    }

    fetchQuery = query => {
        tvApi.fetchShowsWithQuery(query).then(shows => this.setState({shows}))
    }

    handleChangeQuery = query => {
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`
        })
    }

    render() {
        const {shows} = this.state;
        const {match} = this.props;
        return(
            <div>
                <SearchBox onSubmit={this.handleChangeQuery}/>
                {shows.length > 0 && <ul className="ImageGallery">
                {shows.map(show => 
                <li key={show.id} className="ImageGalleryItem">
                    <NavLink className='fs'  to={{pathname: `${match.url}/${show.id}`, state: {from:this.props.location}}}>
                        {show.name} <img src={show.image.medium} alt='Image lesson' className="ImageGalleryItem-image"/>
                        </NavLink>
                    
                    </li>)}
            </ul>}
            </div>
           
        )
    }
}

