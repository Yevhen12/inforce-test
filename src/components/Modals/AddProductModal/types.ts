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
}

export type FormType = {
    name: string | undefined
    count: string | undefined
    weight: string | undefined
    desc: string | undefined
    imageUrl: string | undefined
    width: string | undefined
    height: string | undefined
}