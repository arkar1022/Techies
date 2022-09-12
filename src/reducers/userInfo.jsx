const userInfoReducer = (state = null, action) => {
    switch(action.type) {
        case 'GET_USER':
            return action.payload;
        case 'DELETE_USER':
            return null;
        default:
            return state;
    }
}


export default userInfoReducer;