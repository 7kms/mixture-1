import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './Reducers';
import App from './pages/app';
const middleWareArr = [thunkMiddleware];
const createStoreWithMiddleWare = applyMiddleware(...middleWareArr)(createStore);
let allReducers = combineReducers(reducers);
let store = createStoreWithMiddleWare(allReducers);
class Main extends Component {
    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
export default Main;