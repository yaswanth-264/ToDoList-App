import React,{ useState } from "react";

function Header(props){
    const [InputText,setInputText]=useState("");
     function handleChange(event)
     {
       const newValue=event.target.value;
       setInputText(newValue);
     }

return(
<div>
    <input type="text" value={InputText} onChange={handleChange}/>
      <button onClick={()=>{props.addItem(InputText)
        setInputText("")}}>Add</button>
    </div>
);
}

export default Header;