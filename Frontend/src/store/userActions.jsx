import axios from '../api/axiosconfig';
import { loaduser } from './userSlice';

 export const asyncgetusers=() => async(dispatch,getState)=>{
  try{

    console.log("Current state>>>>>>>>", getState());
    

    const res=await axios.get("/users");
    console.log(res);
    dispatch(loaduser(res.data));
  }
  catch(error){
    console.log(error);
  }
}