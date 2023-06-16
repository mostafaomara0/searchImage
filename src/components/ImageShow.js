import "./imageshow.css"
function ImageShow({img}) {
    return (
      <div className="image-show">
        <img src={img.urls.small} alt={img.alt_description
}/>


      </div>
    )
  }
  
  export default ImageShow;
  