export const BookActions = (books) => {
    return {
        type: 'BOOKS',
        payload: books
    }
}
export const FeedBookActions = (books) => {
    return {
        type: 'FEED_BOOKS',
        payload: books
    }
}

export const EventsActions = (events) => {
    return {
        type: 'EVENTS',
        payload: events
    }
}
export const CoursesActions = (courses) => {
    return {
        type: 'COURSES',
        payload: courses
    }
}

export const AddToCart = (item) => {
    return {
        type: 'PRODUCT',
        payload: item
    }
}