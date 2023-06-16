import "./App.css"
import cover from "./images/lum3n--RBuQ2PK_L8-unsplash.jpg"
import SharchBar from "./components/SharchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";
import searchImages from "./api";
function App() {
  const [image,setimage]=useState([])

  const handelSubmit= async( g)=>{
   const result= await searchImages(g);
   
   setimage(result)



  }
  return (
    <div className="app">

      
<div className="main">
<div className="container">
            <div className="container-div1">
              <SharchBar data={handelSubmit}/></div>
            

         </div>
        
        <dive>
          <div className="pragraph">
            <h2>Welcome</h2> 
            <p>on our image web site</p>
             <p>you can searsh </p> 
             <p>
              <p>about what you wont</p>
             and you will get image 
             </p>
             <p>related to you search  </p>
             <p>"keyword"</p>
             <p>hope you enjoy</p>
          </div>
          
        <img src={cover}alt="cover"/>
        </dive>

       </div>

       <div className="container-div1"><ImageList image={image}/></div>
    
        

    </div>

  )
}

export default App;
