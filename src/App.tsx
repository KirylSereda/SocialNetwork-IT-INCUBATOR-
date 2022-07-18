import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Route } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import style from './App.module.css'


function App() {
    return (
        <div className={style.appWrapper}>
            <Header />

            <div className={style.appWrapperContent}>
                <Navbar />
                <Route path="/dialogs/" render={() => <DialogsContainer />} />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/users/" render={() => <UsersContainer />} />
            </div>
        </div>
    );
}

export default App;
