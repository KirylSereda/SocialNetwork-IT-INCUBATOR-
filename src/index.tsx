import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state, subscriber } from './components/Redux/Store';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} />,
        document.getElementById('root')
    );
}



subscriber(rerenderEntireTree)