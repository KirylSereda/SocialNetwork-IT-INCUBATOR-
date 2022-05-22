
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state, stateType } from './components/Redux/Store';

export const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <App state={state} />,
        document.getElementById('root')
    );
}