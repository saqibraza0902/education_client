import { combineReducers } from 'redux';
import BooksReducer from './BookReducer';
import CoursesReducer from './CoursesReducer';
import EventsReducer from './EventsReducer';
import CartBooksReducer from './CartBooksReducer';

const rootReducer = combineReducers({
    book: BooksReducer,
    event: EventsReducer,
    course: CoursesReducer,
    cart: CartBooksReducer
});

export default rootReducer;