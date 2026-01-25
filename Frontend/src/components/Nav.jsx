import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { asynclogoutuser } from '../store/actions/userActions'

const Nav = () => {
  const dispatch= useDispatch()
  const navigate=useNavigate()
  const user =useSelector((state)=> state.userReducer.users);
  const LogoutHandler= ()=>{
    dispatch(asynclogoutuser());
    navigate("/home")
  }
  return (
    <nav className=" fixed w-full bg-white shadow-sm mb-10">
      <div className="max-w-6xl mx-auto flex justify-end items-center gap-x-6 px-6 py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-medium ${
              isActive ? "text-gray-900" : "text-gray-500"
            } hover:text-gray-900 transition`
          }
        >
          Home
        </NavLink>

        

        {user ? (
          <>
          <NavLink
            to="/admin/create-product"
            className={({ isActive }) =>
              `text-sm font-medium px-4 py-2 rounded-full border ${
                isActive
                  ? "bg-gray-900 text-white border-gray-900"
                  : "text-gray-700 border-gray-300 hover:bg-gray-900 hover:text-white"
              } transition`
            }
          >
            Create Product
          </NavLink>
          <button
            onClick={LogoutHandler}>
            Logout
          </button>
          
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-sm font-medium px-4 py-2 rounded-full border ${
                isActive
                  ? "bg-gray-900 text-white border-gray-900"
                  : "text-gray-700 border-gray-300 hover:bg-gray-900 hover:text-white"
              } transition`
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Nav
