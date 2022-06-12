import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../../routes";
import UserMenu from "../../hoc/UserMenu";
import '../../DZfetch/styles.css'


const Navigation = () => (
    <div>
         <ul className="ImageGallery">
    <li>
            <NavLink to={routes.home} exact className='Navigation-link '  activeClassName="Navigation-link-active">Home</NavLink>
        </li>
        <li>
            <NavLink to={routes.shows} className='Navigation-link ' activeClassName="Navigation-link-active">Shows</NavLink>
        </li>
        <li>
            <NavLink to={routes.showImages} className='Navigation-link' activeClassName="Navigation-link-active">Shows Images</NavLink>
        </li>
        <br/>
        <li>
            <NavLink to={routes.blog} className='Navigation-link' activeClassName="Navigation-link-active">Blog</NavLink>
        </li>
        <li>
            <NavLink to={routes.timer} className='Navigation-link' activeClassName="Navigation-link-active">Timer</NavLink>
        </li>
        </ul>
        <UserMenu/>
    </div>
)

export default Navigation;