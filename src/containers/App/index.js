import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/index';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../../assets/css/fonts.css';
import SignIn from '../SignIn';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {

    render () {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <switch>
                        <Route path="/sign-in" component={SignIn}/>
                    </switch>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
