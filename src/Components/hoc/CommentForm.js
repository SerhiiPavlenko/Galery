import React,{Component} from "react";
import widthContext from "./WidthContext";

class CommentForm extends Component {


    render() {
        return (
            
                <form>
                <label>
                    <span>Name</span>
                    <input type='text' value={this.props.auth.name}/>
                </label>
                <br/>
                <label>
                    <br/>
                    <span>Message</span>
                    <br/>
                    <textarea rows='10'></textarea>
                </label>
            </form>
          
        )
    }
}

export default widthContext(CommentForm)