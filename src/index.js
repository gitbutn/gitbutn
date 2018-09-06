import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MainApp';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowAll from './components/ShowAllIcons/ShowAllIcons';
import Shortener from './components/Shorty/Shorty';

const NewApp = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/icons' component={ShowAll} />
            <Route path='/shorty' component={Shortener} />
            <Route component={App} />
        </Switch>
    </Router>
);

ReactDOM.render(<NewApp />, document.getElementById('root'));
registerServiceWorker();
