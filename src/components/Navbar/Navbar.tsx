import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar container'>
      <div className="navbar-container">
        <h1 onClick={() => navigate('/')}>Brand</h1>
        <ul>
          <li>
            <Link to={'/'}>Posts</Link>
          </li>
          <li>
            <Link to={'/category'}>Categories</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar