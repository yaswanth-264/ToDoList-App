import React, { useState } from "react";

function List(props)
{
   
   return (
       <div className="list" onClick={()=>{props.onChecked(props.id)}}>
       <li>{props.text}</li>
       </div>)
}
export default List;