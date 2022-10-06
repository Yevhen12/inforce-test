export type ProductModalType = {
    activeModal: boolean
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
    isEdit: boolean
    name?: string
    count?: string
    weight?: string
    desc?: string
    imageUrl?: string
    width?: string
    height?: string
    id?: string
}

export type FormType = {
    name: string 
    count: string 
    weight: string 
    desc: string 
    imageUrl: string 
    width: string 
    height: string 
}