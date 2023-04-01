const initialState = {
    books: [],
    feedBooks: [],
}
const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS':
            return {
                books: action.payload
            }
        case 'FEED_BOOKS':
            return {
                feedBooks: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default BooksReducer