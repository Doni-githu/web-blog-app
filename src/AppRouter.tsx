import {Routes, Route} from "react-router-dom"
import PostList from './components/PostList/PostList'
import CategoryList from './components/CategoryList/CategoryList'
import Add from "./components/Add/Add"

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/category' element={<CategoryList />} />
        <Route path="/add/:what" element={<Add />} />
    </Routes>
)
}

export default AppRouter