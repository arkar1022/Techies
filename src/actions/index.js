export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload : nr,
    }
}

export const selectCourse = (course) => {
    return {
        type: 'SELECT_COURSE',
        payload: course
    }
}

export const deselectCourse = () => {
    return {
        type: 'DESELECT_COURSE',
    }
}

export const addToken =(token) => {
    return {
        type: 'ADD_TOKEN',
        payload: token,
    }
}

export const removeToken = () => {
    return {
        type: 'REMOVE_TOKEN',
    }
}


export const login = () => {
    return {
        type: 'LOGIN',
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

export const getUser = (user) => {
    return {
        type: 'GET_USER',
        payload: user,
    }
}

export const deleteUser = (user) => {
    return {
        type: 'DELETE_USER',
    }
}