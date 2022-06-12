import React from "react";
import Context from '../Context/Auth'


const widthContext = WrappedComponent => {
    return function WidthContext(props) {
        return (
            <Context.Consumer>
                {ctx => <WrappedComponent {...props} auth={ctx}/>}
            </Context.Consumer>
        )
    }
}

export default widthContext;