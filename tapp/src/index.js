import React,{Component} from 'react';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import App from './pages';
const middlewareArray = [thunkMiddleware];
const createStoreWithMiddleware = applyMiddleware(...middlewareArray)(createStore);
const store = createStoreWithMiddleware(combineReducers(rootReducer));
class Main extends Component {
  render(){
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}
export default Main;
