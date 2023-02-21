import React from "react";

const Greet= (props)=>
{
    //console.log(props);
   // return <h1>Hello {props.name}</h1>
//ou bien
   const {name}=props
   return <h1>Hello {name}</h1>
}


export default Greet