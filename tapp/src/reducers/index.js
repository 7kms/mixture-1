import * as TabReducers from './Tab';
import * as Previous from './Previous';
import * as MainPage from './MainPageReducer';
export default {
  ...TabReducers,
  ...Previous,
  ...MainPage
}
