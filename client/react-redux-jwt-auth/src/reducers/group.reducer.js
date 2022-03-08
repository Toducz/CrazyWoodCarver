import { JOIN_GROUP_SUCCES, JOIN_GROUP_FAIL } from "../actions/types";


export default function (state = {}, action) {
    const { type } = action;

    switch (type) {
        case JOIN_GROUP_SUCCES:
            console.log("JOIN_GROUP_SUCCES")
            return state;

        case JOIN_GROUP_FAIL:
            return state;

        default:
            return state;
    }
}