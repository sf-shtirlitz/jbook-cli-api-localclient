import { Dispatch } from 'redux';
import { Action } from '../actions';
import { ActionType } from '../action-types';
import { saveCells } from '../action-creators';
import { RootState } from '../reducers';

export const persistMiddlware = ({dispatch,getState}: {dispatch: Dispatch<Action>; getState: () => RootState;}) => {
  let timer: any;

  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);

      if (
        [
          ActionType.MOVE_CELL,
          ActionType.UPDATE_CELL,
          ActionType.INSERT_CELL_AFTER,
          ActionType.DELETE_CELL,
        ].includes(action.type)
      ) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
          //saveCells returns a thunk function 
          //that needs to be called with dispatch 
          //and getState as argument, hence the syntax above.
          // So we are passing dispatch and getState as arguments 
          //to the function returned by saveCells() - weird JS structure 
        }, 250);
      }
    };
  };
};