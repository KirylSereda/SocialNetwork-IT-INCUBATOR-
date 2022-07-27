import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile, getUserStatus, updateStatus } from "../Redux/profile-reducer";
import { AppRootStateType } from "../Redux/redux-store";
import { ProfileType } from "../Redux/types";
import { Profile } from "./Profile";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (status: string) => void
    updateStatus: () => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '18399'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
    withRouter,

)(ProfileContainer)

