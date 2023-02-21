import React from "react";

const Hello=()=>
{
  //  return(
   //     <div>
     //       <h1>Hello jsx</h1>
       // </div>
    //)
    return React.createElement('div',null,React.createElement('h1',{id:'hello'},'hello with create elem'))
}
export default Hello