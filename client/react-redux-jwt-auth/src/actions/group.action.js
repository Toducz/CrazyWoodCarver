import {
    JOIN_GROUP_SUCCES,
    JOIN_GROUP_FAIL,
    SET_MESSAGE
} from "./types";

import GroupService from "../services/groupService";

export const actionJoinGroup = (groupCode) => (dispatch) => {
    return GroupService.joinGroup(groupCode).then(
        (response) => {

            dispatch({
                type: JOIN_GROUP_SUCCES
            })
/*
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message
            })
*/
           // return Promise.resolve();
        },
        (error) => {

        console.log("ErroR")

            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: JOIN_GROUP_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

           // return Promise.reject();
        }
    );
}

