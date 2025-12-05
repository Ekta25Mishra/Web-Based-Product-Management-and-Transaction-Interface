import { useDispatch } from "react-redux"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userActions";

const App = () => {

  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(asynccurrentuser());
  },[]);

  return (
    <div className='text-yellow font-thin w-screen h-screen bg-amber-100'>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App