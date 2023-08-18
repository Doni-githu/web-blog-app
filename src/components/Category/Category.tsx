import React from 'react'
import { ICategory } from '../../interfaces/types'

interface ICategoryProps {
  category: ICategory
}

const Category = ({ category }: ICategoryProps) => {
  return (
    <div>{category.name}</div>
  )
}

export default Category