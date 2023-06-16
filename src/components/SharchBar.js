import "./searchBar.css"
import { useState } from "react";
function SharchBar({data}) {
  const handelFormSubmit=(event)=>{
    event.preventDefault();
    data(term)
  }
  

  const [term,setterm]=useState("")
  const handelChange=(m)=>{
    setterm(m.target.value)

  }

    return (
      <div className="search-bar">
        <form onSubmit={handelFormSubmit}>
          <label>Enter your search keyword</label>
          <input value={term} onChange={handelChange} type="text"/>
        </form>
      </div>
    )
  }
  
  export default SharchBar;
  