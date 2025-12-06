import axios from '../../api/axiosconfig'

export const asyncloadproducts=()=> async(dispatch, getState)

export const asynccreateproduct= ()=> async(dispatch, getState)=>{
  try{
    const user=JSON.parse(localStorage.getItem("user"));
    if(user) dispatch(loaduser(user));
    else console.log("User not logged in!");
    
  }
  catch(error){
    console.log(error);
  }
};