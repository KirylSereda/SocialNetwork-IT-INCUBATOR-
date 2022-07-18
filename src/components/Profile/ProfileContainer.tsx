import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { setUserProfile } from "../Redux/profile-reducer";
import { AppRootStateType } from "../Redux/redux-store";
import { ProfileType } from "../Redux/types";
import { Profile } from "./Profile";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType

}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, {}> {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})


let WitchUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setUserProfile })(WitchUrlDataContainerComponent)