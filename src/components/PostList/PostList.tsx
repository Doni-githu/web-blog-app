import { useContext, useEffect } from 'react'
import './PostList.css'
import { BlogContext } from '../../context'
import { IContextValue, IOptions, IStateBlogContext } from '../../interfaces/types'
import Post from '../Post/Post'
import { Loader } from '../../uiCompnents/Loader/Loader'
import DefaultComponent from '../Default/Default'
import PostService from "../../services/post"


const PostList = () => {
  const { state, dispatch } = useContext(BlogContext) as IContextValue<IStateBlogContext>
  const options: IOptions = {
    emptyText: 'There are no posts',
    btnText: 'Add Post',
    redirectTo: '/add/post',
  }

  useEffect(() => {
    PostService.all()
      .then((res) => {        
        dispatch({ type: 'postAddAll', payload: res.data })
      })
  }, [])

  if (!state.posts) {
    return <Loader />
  }

  if (state.posts.length === 0) {
    return <DefaultComponent options={options} />
  }

  return (
    <div className='posts container'>
      <div className="posts-container">
        {state.posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  )
}

export default PostList