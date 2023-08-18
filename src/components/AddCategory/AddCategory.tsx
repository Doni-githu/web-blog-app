import { ChangeEvent, useContext, useRef, useState } from 'react'
import './AddCategory.css'
import Category from '../../services/category'
import { useNavigate } from "react-router-dom"
import { BlogContext } from '../../context'
import { IContextValue, IStateBlogContext } from '../../interfaces/types'
const AddCategory = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const nameInputBoxRef = useRef<HTMLDivElement>(null)
    const [error, setError] = useState('');
    const { dispatch } = useContext(BlogContext) as IContextValue<IStateBlogContext>

    const AddHandler = () => {
        if (!nameRef.current?.value) {
            setError('Name could not be empty')
            return
        }
        const data = {
            name: nameRef.current.value
        }

        Category.create(data)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: 'categoryAddOne', payload: res.data })
                navigate('/category')
            })
    }

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setError('Name could not be empty')
            nameInputBoxRef.current?.classList.add('empty')
        } else {
            setError('')
            nameInputBoxRef.current?.classList.remove('empty')
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div ref={nameInputBoxRef} className="input-box">
                <input onChange={changeHandler} required ref={nameRef} type="text" />
                <label>Name of your category</label>
                <p style={{
                    marginTop: '5px',
                    color: 'red'
                }}>{error}</p>
            </div>
            <div className='btn'>
                <button onClick={AddHandler}>Add Category</button>
            </div>
        </form>
    )
}

export default AddCategory