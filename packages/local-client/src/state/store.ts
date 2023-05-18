import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistMiddlware } from './middlewares/persist-middleware';
//import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(persistMiddlware, thunk));

//these 4 calls below to dispatch just generate 4 cells in the cell list
// store.dispatch({
//     type: ActionType.INSERT_CELL_AFTER,
//     payload: {
//       id: null,
//       type: 'code',
//     },
//   });
  
//   store.dispatch({
//     type: ActionType.INSERT_CELL_AFTER,
//     payload: {
//       id: null,
//       type: 'text',
//     },
//   });
  
//   store.dispatch({
//     type: ActionType.INSERT_CELL_AFTER,
//     payload: {
//       id: null,
//       type: 'code',
//     },
//   });
  
//   store.dispatch({
//     type: ActionType.INSERT_CELL_AFTER,
//     payload: {
//       id: null,
//       type: 'text',
//     },
//   });
  