import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../Redux/profile-reducer";
import { AppRootStateType } from "../Redux/redux-store";
import { ProfileType } from "../Redux/types";
import { Profile } from "./Profile";

type PropsType = {
    profile: ProfileType
    setUserProfile: (Profile: ProfileType) => void
}


class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)