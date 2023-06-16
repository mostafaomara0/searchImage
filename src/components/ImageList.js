import "./imagelist.css"
import ImageShow from "./ImageShow";
function ImageList({image}) {
  const renderImage =image.map((img)=>{
    return <ImageShow img={img}/>

   })
    return (
 
      <div className="image-list">
       {renderImage}

      </div>
    )
  }
  
  export default ImageList;
  