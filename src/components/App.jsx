import React,{ useState } from "react";
import List from "./List.jsx";
import Header from "./Header.jsx";

function App()
{
  const [Item,setItem]=useState([]);
  function addItem(inputText){
    setItem(prevItems=>{
      return [...prevItems,inputText];
   })
  }
   function deleteItem(id){
        setItem(prevItems=>{
          return prevItems.filter((item,index)=>{
            return id!==index;
          })
        });
   }
  
  return(
      <div className="container">
        <div>
        <h1>To-Do-List App</h1>
        </div>
       <Header 
        addItem={addItem}/>
      <div className="bottom">
      <ol>
         { Item.map((todoItem,index) => (
           <List 
           key={index}
           id={index}
           text={todoItem}
           onChecked={deleteItem}/>
         ))}
      </ol>
      </div>
      </div>
  );

}
export default App;