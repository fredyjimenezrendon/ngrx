import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {ProductState} from "../../products/state/product.reducer";
import * as AppState from "../../state/app.state";

export interface State extends AppState.State {
  user: UserState
}

export interface UserState {
  maskUserName: boolean;
}

const initialState: UserState = {
  maskUserName: true
}

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMarkUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const userReducer = createReducer(
  initialState,
  on(createAction('[User] Toggle User mask'), state => {
    return {
      ...state,
      showMaskName: true
    }
  })
)
