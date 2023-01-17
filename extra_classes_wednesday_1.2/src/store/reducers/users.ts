import {createUser} from 'store/actions';
import {UserType} from 'types';

type initStateType = {
    users: UserType[]
}

const initState: initStateType = {
    users: [{id: 'string', name: 'string'}]
};

type ActionsType = ReturnType<typeof createUser>;

export const usersReducer = (state: initStateType = initState, action: ActionsType): initStateType => {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        default:
            return state;
    }
};
