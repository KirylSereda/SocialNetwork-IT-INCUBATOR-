import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { StateType } from "./components/Redux/types";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

type PropsType = {
    state: StateType
    dispatch: (action: any) => void
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path="/dialogs/" render={() => <DialogsContainer
                        dialogs={props.state.dialogsPage.dialogs}
                        messages={props.state.dialogsPage.messages}
                        newMessageBody={props.state.dialogsPage.newMessageBody}
                        dispatch={props.dispatch} />} />
                    <Route path="/profile/" render={() => <Profile
                        posts={props.state.profilePage.posts}
                        dispatch={props.dispatch}

                        newPostText={props.state.profilePage.newPostText} />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
