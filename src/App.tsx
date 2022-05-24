import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { addPost, StateType, upDateNewPostText } from "./components/Redux/Store";

type PropsType = {
    state: StateType
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path="/dialogs/" render={() => <Dialogs
                        dialogs={props.state.dialogsPage.dialogs}
                        messages={props.state.dialogsPage.messages} />} />
                    <Route path="/profile/" render={() => <Profile
                        posts={props.state.profilePage.posts}
                        addPost={addPost}
                        upDateNewPostText={upDateNewPostText}
                        newPostText={props.state.profilePage.newPostText} />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
