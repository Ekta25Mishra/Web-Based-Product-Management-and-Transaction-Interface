import { nanoid } from "nanoid";
import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"
import { asyncloginuser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const Login = () => {

  const {register, reset, handleSubmit}= useForm();
  const dispatch=useDispatch();
  const LoginHandler=(user)=>{
    console.log(user);
    dispatch(asyncloginuser(user));
    
  }

   return (
    <div className="bg-amber-100 flex justify-center items-center h-screen">
      <div className="bg-red-300 shadow-md rounded-2xl p-10 w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          LOGIN
        </h1>

        <form 
        onSubmit={handleSubmit(LoginHandler)}
        className="space-y-5">
          

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
            Log In
          </button>

          <p className="mt-5">
            Don't have an account? 
            <Link className="text-blue-600" to="/register">Register</Link>
          </p>
        </form>

        <p className="text-center text-gray-600 mt-6 cursor-pointer hover:underline">
          Forgot password?
        </p>
      </div>
    </div>
  );
}

export default Login