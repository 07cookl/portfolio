import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";


export default function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <NavLink to={ROUTES.home()} >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.aboutMe()} >
                    About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.projectsChallenges()} >
                    My Work
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.contact()} >
                    Contact
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}
