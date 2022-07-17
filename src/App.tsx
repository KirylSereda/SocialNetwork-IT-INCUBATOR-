import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Route } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path="/dialogs/" render={() => <DialogsContainer />} />
                <Route path="/profile/" render={() => <Profile />} />
                <Route path="/users/" render={() => <UsersContainer />} />
            </div>
        </div>
    );
}

export default App;
