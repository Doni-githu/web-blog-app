import {useParams} from "react-router-dom"
import { IAddParams } from '../../interfaces/types'
import AddPost from '../AddPost/AddPost'
import AddCategory from '../AddCategory/AddCategory'

const Add = () => {
    const params:IAddParams = useParams() 

    return (
        <div className='add container'>
            <div className="add-container">
                {params.what === "post" ? <>
                    <AddPost />
                </> : 
                params.what === "category" ? <>
                    <AddCategory />
                </> : null}
            </div>
        </div>
    )
}

export default Add