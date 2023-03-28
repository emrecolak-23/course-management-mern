import { Fragment } from "react";
import {
    NavigationContainer,
    NavLinkContainer,
    NavLink,
    LogoContainer,
} from './navigation.styles';
import { Outlet } from "react-router-dom";
//   import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { UserData } from "../../store/slices/auth-slice";
import { useDispatch } from "react-redux";
import { singOut } from "../../store/thunks/signOut";

const Navigation = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector<RootState, UserData | null>(state => {
        return state.auth.currentUser
    })

    const handleSignOut = () => {
        dispatch<any>(singOut())
    }

    console.log(currentUser)

    let authLink;
    if (!currentUser) {
      authLink = <NavLink to="/auth">SIGN IN</NavLink>;
    } else {
        console.log(currentUser)
      authLink = (
        <NavLink as="span" onClick={handleSignOut}>
          SIGN OUT
        </NavLink>
      );
    }

    return <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                Course Management
            </LogoContainer>
            <NavLinkContainer>
                {authLink}
            </NavLinkContainer>
        </NavigationContainer>
        <Outlet />
    </Fragment>
}

export default Navigation