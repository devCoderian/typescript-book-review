import { createActions, handleActions } from "redux-actions";
import { takeEvery } from "redux-saga/effects";
import { LoginReqType } from "../../types";

interface AuthState {
     token: string | null;
     loading: boolean;
     error: Error | null;
     
}
const initialState: AuthState = {
    token: null,
    loading: false,
    error: null
};

const prefix = "my-books/auth";

const reducer = handleActions<AuthState, string>(
    {
        PENDING: (state) => ({
            ...state,
            loading: true,
            error: null,
        }),
        SUCCESS: (state, action) => ({
            token: action.payload,
            loading: false,
            error: null
        }),
        FAIL: (state, action: any) => ({
            ...state,
            loading: false,
            error: action.payload,
        }),
    },
    initialState,
    { prefix }
)

export default reducer;

//saga
export const {login,logout} = createActions("LOGIN", "LOGOUT", {prefix})
export function* authSaga(){
    yield takeEvery(`${prefix}/LOGIN`, loginSaga)
    yield takeEvery(`${prefix}/LOGOUT`, logoutSaga)
}

function* loginSaga(action: Action<LoginReqType>){
  try{

  }catch(){
    
  }
}
function* logoutSaga(){
    
}