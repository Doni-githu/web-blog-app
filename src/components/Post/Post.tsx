import React from 'react'
import { IBlog } from '../../interfaces/types'

type IBlogProps = {
    post: IBlog
}

const Post = ({ post }: IBlogProps) => {
    return (
        <div>Post</div>
    )
}

export default Post