const tokenReducer = (state = null, action) => {
    switch(action.type) {
        case 'ADD_TOKEN':
            return 'Token ' + action.payload;
        case 'REMOVE_TOKEN':
            return null;
        default:
            return state;
    }
}


export default tokenReducer;