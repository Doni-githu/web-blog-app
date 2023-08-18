import { useContext, useEffect } from 'react'
import { BlogContext } from '../../context'
import { IContextValue, IOptions, IStateBlogContext } from '../../interfaces/types'
import Category from '../Category/Category'
import { Loader } from '../../uiCompnents/Loader/Loader'
import DefaultComponent from '../Default/Default'
import CategoryService from "../../services/category"

const CategoryList = () => {
  const { state, dispatch } = useContext(BlogContext) as IContextValue<IStateBlogContext>

  useEffect(() => {
    CategoryService.all()
      .then((res) => {
        console.log(res.data)
        dispatch({ type: 'categoryAddAll', payload: res.data })
      })
  }, [])

  const options: IOptions = {
    emptyText: 'There are no categories',
    btnText: 'Add Category',
    redirectTo: '/add/category',
  }
  if (!state.categories) {
    return <DefaultComponent options={{}}>
      <Loader />
    </DefaultComponent>
  }

  if (state.categories.length === 0) {
    return <DefaultComponent options={options} />
  }



  return (
    <DefaultComponent options={{ btnText: options.btnText, redirectTo: options.redirectTo }}>
      {state.categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </DefaultComponent>
  )
}

export default CategoryList