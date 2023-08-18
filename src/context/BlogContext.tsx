import { createContext, useReducer } from "react";
import { IAction, IBlogProviderProps, IStateBlogContext } from "../interfaces/types";


export const BlogContext = createContext({})

const initialState: IStateBlogContext = {
    posts: null,
    categories: null
}



function reducer(state: IStateBlogContext, action: IAction) {
    switch (action.type) {
        case "postAddAll":
            return { ...state, posts: action.payload }
        case "categoryAddAll":
            return { ...state, categories: action.payload }
        case "categoryAddOne":
            return { ...state, categories: [...[state.categories], action.payload] }
        default:
            return state
    }
}

export function BlogProvider({ children }: IBlogProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState)



    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}
