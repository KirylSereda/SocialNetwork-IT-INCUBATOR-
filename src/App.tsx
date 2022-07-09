import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { StateType } from "./components/Redux/types";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";


function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path="/dialogs/" render={() => <DialogsContainer />} />
                <Route path="/profile/" render={() => <Profile
                />} />
            </div>
        </div>
    );
}

export default App;
