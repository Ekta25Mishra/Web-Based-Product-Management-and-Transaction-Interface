import { nanoid } from "nanoid";
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import { asyncregisteruser } from "../store/actions/userActions";
const Register = () => {
  const navigate=useNavigate()
  const {register, reset, handleSubmit}= useForm();
  const dispatch= useDispatch();
  const RegisterHandler=(user)=>{
    user.id=nanoid();
    user.isAdmin= false;
    dispatch(asyncregisteruser(user));
    navigate("/login");
    
  }

   return (
    <div className="bg-amber-100 flex justify-center items-center h-screen">
      <div className="bg-red-300 shadow-md rounded-2xl p-10 w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Register
        </h1>

        <form 
        onSubmit={handleSubmit(RegisterHandler)}
        className="space-y-5">
          <input
          {...register("username")}
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-xl bg-[#f4f1ed] text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <input
          {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-[#f4f1ed] text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <input
          {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-[#f4f1ed] text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#e0d5ca] text-gray-800 font-semibold hover:bg-[#d8ccc0] transition"
          >
            Register
          </button>

          <p className="mt-5">
            Already have an account? 
            <Link className="text-blue-600" to="/login">Login</Link>
          </p>
        </form>

      </div>
    </div>
  );
}

export default Register;