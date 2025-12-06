import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const user =useSelector((state)=> state.userReducer.users);
  console.log(user);
  
  return (
    <nav className='flex justify-end items-center gap-x-5 p-5 mb-10 font-black'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {user ? (
        <>
        <NavLink to="/admin/create-product">Create Product</NavLink>
        </>
      ):(
        <>
      <NavLink to="/login">Login</NavLink>
      </>
      )}
    </nav>
  )
}

export default Nav