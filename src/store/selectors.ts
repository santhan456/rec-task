import {State, ListItem} from "./reducer";

export function getList(state:State): ListItem[] {
    return [...state.list];
}

export function getListItemById(state:State, id: string): ListItem | undefined{
    const filtered =  state.list.filter((item:ListItem) => item.id && item.id === id);
    return filtered[0] || undefined;
}