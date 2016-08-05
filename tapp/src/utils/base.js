// obtained from react native tutorials
import {PixelRatio,Platform} from 'react-native';
import Dimensions from 'Dimensions';
const Util = {
  OS: Platform.OS,
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  themeColor:'#53cac3',
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
};
export default Util;
