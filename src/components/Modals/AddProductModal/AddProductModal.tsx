import React, { useState, useEffect } from 'react'
import { addProduct } from '../../../redux/slices/thunks/addProduct'
import { useAppDispatch } from '../../../redux/hooks'
import Modal from '../Modal'
import { IProductItem } from '../../../interfaces/IProductItem'
import { ProductModalType } from './types'
import { FormType } from './types'
import { updateProduct } from '../../../redux/slices/thunks/updateProduct'
import { PRODUCTS_API } from '../../../constants/api/api'
import axios from 'axios'

const AddProductModal: React.FC<ProductModalType> = ({ activeModal, setActiveModal, isEdit, id }) => {


    const [form, setForm] = useState<FormType>(
        {
            imageUrl: '',
            name: '',
            count: '',
            weight: '',
            desc: '',
            height: '',
            width: ''
        }
    )
    const dispatch = useAppDispatch()

    useEffect(() => {

        if (isEdit) {
            const getProduct = async () => {
                const { data } = await axios.get<IProductItem>(`${PRODUCTS_API}/${id}`)
                const { imageUrl,
                    name,
                    count,
                    weight,
                    description,
                    size } = data
                    console.log(data, id, isEdit)
                setForm({
                    imageUrl,
                    name,
                    count: String(count),
                    weight,
                    desc:description,
                    height:String(size.height),
                    width:String(size.width)

                })
            }
            getProduct()
        }
    }, [activeModal])


    const handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void = (e) => {
        const { value, name } = e.target
        setForm(prevForm => (
            {
                ...prevForm,
                [name]: value
            }
        ))
    }

    const uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setForm(prevForm => ({ ...prevForm, imageUrl: (reader.result) as string }))
            }
        }
        if (e.target.files) {
            reader.readAsDataURL(e.target.files[0])
        }

    }

    const closeModal = () => {
        setActiveModal(false)
        setForm({
            imageUrl: '',
            name: '',
            count: '',
            weight: '',
            desc: '',
            height: '',
            width: '',
        })
    }

    const disabled = !form.imageUrl || !form.name || !form.count || !form.weight || !form.desc || !form.height || !form.width

    const submitFunc: () => Promise<void> = async () => {
        const newProduct: IProductItem = {
            id: new Date().getTime().toString(),
            imageUrl: form.imageUrl as string,
            name: form.name as string,
            count: Number(form.count),
            description: form.desc as string,
            size: {
                width: Number(form.width),
                height: Number(form.height)
            },
            weight: form.weight as string,
            comments: []
        }
        if (isEdit) {
            dispatch(await updateProduct({...newProduct, id:id as string}))
        } else {
            dispatch(await addProduct(newProduct))
        }

        closeModal()
    }

    return (
        <Modal
            width='400px'
            activeModal={activeModal}
            closeModal={closeModal}
        >
            <p className='w-full text-center font-semibold text-base py-2 border-b'>{isEdit ? 'Edit Product' : 'Add Edit' }</p>
            <form method='POST' className='mt-4 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <label className='text-xs w-32 h-32 border rounded-full flex items-center justify-center cursor-pointer mb-4'>
                        {form.imageUrl?.length ? <img alt='productPhoto' src={form.imageUrl} className="w-full h-full object-cover rounded-full" /> : <p>Choose photo</p>}

                        <input type='file' className='hidden' onChange={(e) => uploadImage(e)} />
                    </label>
                </div>

                <input
                    required
                    name='name'
                    value={form.name}
                    type='text'
                    className='text-sm border rounded mx-4 placeholder:text-sm outline-none px-4 py-2 mb-4'
                    placeholder='Name...'
                    onChange={(e) => handleChange(e)}
                />
                <input
                    required
                    name='weight'
                    value={form.weight}
                    type='number'
                    className='text-sm w-40 border rounded mx-4 placeholder:text-sm outline-none px-4 py-2 mb-4'
                    placeholder='Weight(grams)...'
                    onChange={(e) => handleChange(e)}
                />
                <input
                    required
                    name='count'
                    value={form.count}
                    type='number'
                    className='text-sm w-40 border rounded mx-4 placeholder:text-sm outline-none px-4 py-2 mb-4'
                    placeholder='Amount...'
                    onChange={(e) => handleChange(e)}
                />
                <input
                    required
                    name='width'
                    value={form.width}
                    type='number'
                    className='text-sm w-40 border rounded mx-4 placeholder:text-sm outline-none px-4 py-2 mb-4'
                    placeholder='Width...'
                    onChange={(e) => handleChange(e)}
                />
                <input
                    required
                    name='height'
                    value={form.height}
                    type='number'
                    className='text-sm w-40 border rounded mx-4 placeholder:text-sm outline-none px-4 py-2 mb-4'
                    placeholder='Height...'
                    onChange={(e) => handleChange(e)}
                />

                <textarea
                    name='desc'
                    value={form.desc}
                    placeholder='Describe product...'
                    className='px-4 py-2 text-sm border rounded mx-4 placeholder:text-sm outline-none resize-none'
                    onChange={(e) => handleChange(e)}
                />

                <div className='w-full flex justify-between px-4'>
                    <button
                        className='p-3 font-semibold text-red-500'
                        type='button'
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button
                        disabled={disabled}
                        className={`p-3 font-semibold ${disabled ? 'text-blue-200' : 'text-blue-500'}`}
                        type='button'
                        onClick={() => submitFunc()}
                    >
                        Confirm
                    </button>
                </div>
            </form>

        </Modal>
    )
}

export default React.memo(AddProductModal)