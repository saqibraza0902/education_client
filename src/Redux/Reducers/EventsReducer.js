const initialState = {
    events: []
}
const EventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EVENTS':
            return {
                events: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default EventsReducer