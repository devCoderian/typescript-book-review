import { createActions,handleActions} from "redux-actions";

interface Book{

}

interface BookState {
    books: Book[] | null;
    loading: boolean;
    error: Error | null;
}

const initialState:BookState = {
    books: null,
    loading: false,
    error: null,
}

const prefix = "my-books/books";

export const {pending, success, fail} = createActions(
    'PENDING', 
    'SUCCESS',
    'FAIL',
    { prefix }
);

const reducer = handleActions<BookState, Book[]>({
    PENDING: (state) => ({
        ...state, 
        loading: true, 
        error: null
    }),
    SUCCESS:(state, action) => ({
        books: action.payload,
        loading: false,
        error: null
    }),
    FAIL:(state, action:any) => ({
        ...state,
        loading: false,
        error: action.payload
    })
}, initialState, {prefix})

export default reducer;

//saga

export function booksSaga(){
    
}