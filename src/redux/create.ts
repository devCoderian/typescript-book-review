import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";
import { routerMiddleware } from 'connected-react-router';
import history from "../history";
import TokenService from "../services/TokenService";


const create = () =>{

    const token = TokenService.get();
    const sagaMiddleware = createSagaMiddleware();
    //스토어 만들기 createStore함수로 rootreducer가 필요하다.
    //미들웨어를 설정하기 위해 enhancer -> applyMiddleware
    const store = createStore(
        reducer(history),{
            auth:{
                token,
                loading: false,
                error: null
            }
        },
         composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
         );
    sagaMiddleware.run(rootSaga);
    return store;
}

export default create;