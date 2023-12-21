import React, {useState} from "react";



function App() {
  const [item ,newitem]= useState("");
  const [items,setitem]=useState([]);
  function sbmt(event){
    var thing=event.target.inpt.value;
    newitem(thing);
    var insert=true;
    items.map(itm =>{
   if(itm===thing){
     insert=false;
   }
    })
   if(insert){ items.push(thing);}
    event.preventDefault();
    event.target.inpt.value="";
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={sbmt}>
        <input name="inpt" type="text" />
        <button>
          <span>Add</span>
        </button>
        </form>
      </div>
      <div>
        {items.map((item) => (
          <ul>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
