
import type from "../action/type";


export function increament() {
    return ({ type: type.increment });
  }
  export function decreament() {
    return ({ type: type.decrement });
  }
 export  function toggle() {
    return ({ type: type.toggle });
  }
 
export const getRecipe =  (url) =>async(dispatch)=> {
    const request= await fetch(url);
    const data= await request.json();
     console.log(data);
    dispatch({
      type:"recipes",payload:{
        data:data.hits
      }
    });
  };