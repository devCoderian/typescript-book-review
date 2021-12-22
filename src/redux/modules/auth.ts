import { push } from "connected-react-router";
import { AnyAction } from "redux";
import { Action, createActions, handleActions } from "redux-actions";
import { put, takeEvery, call, select} from "redux-saga/effects";
import TokenService from "../../services/TokenService";
import UserService from "../../services/UserService";
import { LoginReqType,AuthState } from "../../types";

const initialState: AuthState = {
    token: null,
    loading: false,
    error: null
};

const prefix = "my-books/auth";

export const {pending, success, fail} = createActions("PENDING", "SUCCESS", "FAIL", {prefix});

//action.payload -> string
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
interface LoginSagaAction extends AnyAction {
    payload: LoginReqType;
  }
function* loginSaga(action:LoginSagaAction){
    try {
        yield put(pending());
        const token:string = yield call(UserService.login, action.payload);
        //localstorage
        TokenService.set(token);
        yield put(success(token))
        //push
        yield put(push("/"));
    } catch (error) {
        yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')));
    }
}

// https://velog.io/@devstefancho/typescript-Object-is-of-type-unknown.ts2571-error-object
function* logoutSaga(){
    try {
        yield put(pending());
        const token:string = yield select(state => state.auth.token);
        yield call(UserService.logout, token)
        TokenService.set(token);
    } catch (error) {
       console.error(error)
    }finally{
        TokenService.remove();
        yield put(success(null));
    }
}