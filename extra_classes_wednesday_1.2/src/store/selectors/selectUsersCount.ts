import {RootStateOrAny} from "store";


export const selectUsersCount = (state: RootStateOrAny): string => state.userCount.count;
