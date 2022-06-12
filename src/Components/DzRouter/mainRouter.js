import React,{Component} from "react";
import Layout from "../../servicess/Layout";
import { Route,Switch } from "react-router-dom";
import Home from './views/Home'
import Shows from "./views/Shows";
import NotFound from './views/NotFound'
import ShowDetails from './views/ShowDetails'
import routes from '../../routes'
import Main from "../DZfetch/main";
import Context from '../../Components//Context/Auth'
import Blog from './views/Blog'
import Timer from "../Practics/Timer";

const user = {
    name: 'Dubas',
    email: 'mango@gmail.com',
    avatar: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg'
}


export default class mainRouter extends Component {

    state = {
        user: null,
    }

    logIn = () => {
        this.setState({user})
    }

    logOut = () => {
        this.setState({user: null})
    }
    

    render() {
        return( 
        <Context.Provider value={{
            user: this.state.user,
            onLogIn: this.logIn,
            onLogOut: this.logOut
        }}>
    <Layout> 
   
    <Switch>
    <Route path={routes.home} exact component={Home}/>
    <Route path={routes.blog} component={Blog}/>
    <Route path={routes.timer} component={Timer}/>
    <Route path={routes.showDetail} component={ShowDetails}/>
    <Route path={routes.shows} component={Shows}/>
    <Route path={routes.showImages} component={Main}/>
    <Route component={NotFound}/>
    </Switch>
    </Layout>
        </Context.Provider>

        

        )
    }
}



