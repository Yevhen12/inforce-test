import { IComment } from "./IComment"

export interface IProductItem {
    id: string,
    imageUrl: string,
    name: string,
    count: number,
    description: string
    size: {
        width: number,
        height: number
    },
    weight: string,
    comments: IComment[]
}