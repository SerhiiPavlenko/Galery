import React,{Component} from "react";
import tvApi from './tv-mazeApi'
import routes from "../../../routes";


export default class ShowDetails extends Component {
    state = {
        show: null,
    }

    componentDidMount() { 
        tvApi.fetchShowDetails(this.props.match.params.showId).then(show => this.setState({show}))
     } 

     handleGoBack = () => {
         const {state} = this.props.location;
         if(state && state.from) {
          return   this.props.history.push(state.from)
         }
         this.props.history.push(routes.shows)
     }


    render() {
        const {show} = this.state;
        return (
            <div>
                <button type="button" onClick={this.handleGoBack}>Go back</button>
                <br/>
               {show && <>
                <h1>{show.name}</h1>
            <img src={show.image.medium} alt='Image lesson'/>
            <p>{`Rating: ${show.rating.average}`}</p>
               </>}
            </div>
    )
}
}


