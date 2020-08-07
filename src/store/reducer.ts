
export interface ListItem{
    id?: string;
    title: string;
    description: string;
}

export interface State{
    list:ListItem[]
}

const DefaultState:State = {
    list: [
        {
            id:"1",
            title: "pick groceries",
            description: "to pick groceries"
        }
    ]
}

export function reducer(state:State = DefaultState, action:any){

    switch(action.type){
        default:
            return {...state};
    }

}