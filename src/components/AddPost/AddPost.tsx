import './AddPost.css'
import '../AddCategory/AddCategory.css'
import { ChangeEvent, useContext, useRef, useState } from 'react'
import Post from '../../services/post'
import { IContextValue, IStateBlogContext } from '../../interfaces/types'
import { BlogContext } from '../../context'
import { useNavigate } from 'react-router-dom'
import makeSlug from '../../utils/makeSlug'
import CustomSelect from '../../uiCompnents/CustomSelect/CustomSelect'
import { Option } from "../../uiCompnents/CustomSelect/CustomSelect"
const AddPost = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { dispatch } = useContext(BlogContext) as IContextValue<IStateBlogContext>
  const [inputs, setInputs] = useState([
    { name: 'Title', value: '', error: '' },
    { name: 'Excerpt', value: '', error: '' },
    { name: 'Content', value: '', error: '' },
  ])
  const [slug, setSlug] = useState('')

  const AddHandler = () => {
    if (inputs.filter(c => c.value).length !== inputs.length) {
      setError('All fields are required')
      return
    }
    const data = {
      ...inputs.map((item) => ({
        [item.name.toLowerCase()]: item.value
      }))
    }

    console.log(data);
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>, idx: number) => {
    const target = event.target;
    const name = target.name;
    let error = '';

    if (!target.value) {
      error = `${name} field cannot be empty`
    }

    if (name === "Title") {
      let slug = makeSlug(target.value)
      setSlug(slug)
    }

    inputs[idx] = {
      ...inputs[idx],
      value: target.value,
      error
    }
    setInputs([...inputs])
  }
  const options: Option[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  

  const handlerSelect = (option: Option) => {
    
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <p>{error}</p>
        </div>
        {inputs.map((item, idx) => (
          <div className='input-box' key={idx}>
            <input type="text" name={item.name} value={item.value} onChange={e => changeHandler(e, idx)} />
            <label>{item.name}</label>
            {item.error ? <div className='div'>{item.error}</div> : null}
          </div>
        ))}
        <div>
          <CustomSelect options={options} onSelect={handlerSelect} />
        </div>
        <div className='btn'>
          <button onClick={AddHandler}>Add Category</button>
        </div>
      </form>
    </>

  )
}

export default AddPost