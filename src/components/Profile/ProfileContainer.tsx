import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { getUserProfile } from "../Redux/profile-reducer";
import { AppRootStateType } from "../Redux/redux-store";
import { ProfileType } from "../Redux/types";
import { Profile } from "./Profile";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    auth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, {}> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }


    render() {
        return (
            <Profile profile={this.props.profile} auth={this.props.auth} />
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    auth: state.auth.isAuth
})


let WitchUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, { getUserProfile })(WitchUrlDataContainerComponent)