import { Dispatch, DispatchWithoutAction, ReactNode } from "react"

export interface ICategory {
    name: string,
    id: number
}

export interface IPost {
    id: number,
    category: ICategory[],
    title: string,
    excerpt?: string,
    content: string,
    slug: string,
    published: string,
    author: any,
    status: 'Draft' | 'Published',
}

export interface IBlog2 extends Omit<IPost, "id"> { }


export interface IStateBlogContext {
    posts: IPost[] | null,
    categories: ICategory[] | null
}

export interface IAction {
    type?: string,
    payload?: any
}

export interface IBlogProviderProps {
    children: ReactNode
}

export interface IContextValue<T> {
    state: T,
    dispatch: (a: IAction) => null
}

export interface IOptions {
    btnText?: string,
    emptyText?: string,
    redirectTo?: string,
}
export interface IProps {
    options: IOptions,
    children?: ReactNode
}

export interface IAddParams {
    what?: string
}
