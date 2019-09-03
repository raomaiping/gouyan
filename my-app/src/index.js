import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './components/error-boundary'
import {Provider} from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (   <ErrorBoundary>
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorBoundary>   
    ), 
    document.getElementById('root')
);


serviceWorker.unregister();//开发
// serviceWorker.register();//生产
