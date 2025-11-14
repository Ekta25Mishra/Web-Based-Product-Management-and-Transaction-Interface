import axios from '../api/axiosconfig';
import { loaduser } from './userSlice';

 export const asyncgetusers=async()=>{
  try{
    const res=axios.get("/users");
    console.log(res);
    loaduser(res.data);
    
  }
  catch(error){
    console.log(error);
  }
}