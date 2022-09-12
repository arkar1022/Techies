const courseInfoReducer = (state = null, action) => {
    switch(action.type) {
        case 'SELECT_COURSE':
            return action.payload;
        case 'DESELECT_COURSE':
            return null;
        default:
            return state;
    }
}


export default courseInfoReducer;