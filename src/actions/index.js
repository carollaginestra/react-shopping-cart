import { UPDATE_NAME } from './actionTypes';

export const updateNameStore = value => ({
    type: UPDATE_NAME,
    name: value
});
