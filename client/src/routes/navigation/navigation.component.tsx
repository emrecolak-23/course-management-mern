import { Fragment } from "react";
import {
    NavigationContainer,
    NavLinkContainer,
    NavLink,
    LogoContainer,
} from './navigation.styles';
import { Outlet } from "react-router-dom";
//   import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';


const Navigation = () => {
    return <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                Course Management
            </LogoContainer>
            <NavLinkContainer>
                <NavLink to="/auth">Sign in</NavLink>
            </NavLinkContainer>
        </NavigationContainer>
        <Outlet />
    </Fragment>
}

export default Navigation