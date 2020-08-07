import {ListItem} from "./reducer";


export const ADD_ACTION = "ADD_ACTION";
export const EDIT_ACTION = "EDIT_ACTION";
export const DELETE_ACTION = "DELETE_ACTION";

export function addItem(item: ListItem){
    return {
        type: ADD_ACTION,
        item
    }
}

export function editItem(item: ListItem){
    return {
        type: EDIT_ACTION,
        item
    }
}

export function deleteItem(id: string){
    return {
        type: DELETE_ACTION,
        id
    }
}