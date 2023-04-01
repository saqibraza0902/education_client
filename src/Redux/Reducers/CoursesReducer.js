const initialState = {
    courses: []
}
const CoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COURSES':
            return {
                courses: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default CoursesReducer