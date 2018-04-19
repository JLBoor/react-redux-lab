import { mockUsers } from '../mocks/users';

/*
 * action types
 */

export const USERS_USER_SELECTED = 'USERS_USER_SELECTED';

/*
 * action creators
 */

export function selectUser(user) {
    return {type: USERS_USER_SELECTED, user }
}

/*
 * Reducer
 */

export const users = (state = { list: mockUsers, selectedUser: null }, action) => {
    switch (action.type) {

        case USERS_USER_SELECTED:
            alert(action.user.name + ' selected.');
            return Object.assign({}, state, { selectedUser: action.user });

        default:
            return state
    }
}
