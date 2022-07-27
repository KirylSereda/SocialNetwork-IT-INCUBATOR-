
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppRootStateType } from "../components/Redux/redux-store";
import { ComponentType } from "react";

type MapStatePropsType = {
    auth: boolean
}
const mapStateToprops = (state: AppRootStateType): MapStatePropsType => {
    return {
        auth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        let { auth, ...restProps } = props
        if (!auth) return <Redirect to={'/login'} />

        return (<Component {...restProps as T} />
        )
    }


    let ConnectedRedirectComponent = connect(mapStateToprops)(RedirectComponent)
    return ConnectedRedirectComponent


}