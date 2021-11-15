import { FETCH_BOOKS, BOOK } from "../actions/bookActions";

const intialState = {
    books: [],
    book: {}
}
const rootReducer = function (state = intialState, action) {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case BOOK:
            return {
                ...state,
                book: action.payload
            }
        default:
            return state;

    }
}
export default rootReducer;