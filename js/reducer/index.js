import {combineReducers} from 'redux';
import theme from './theme';
import popular from './popular'
import trending from './trending'


/**
 * 1.合并reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const index = combineReducers({
    theme,
    popular,
    trending
});

export default index;
