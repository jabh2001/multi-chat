import GalleryImage from "../../components/GalleryImage/GalleryImage"
import "./index.css"

function IndexPage() {

  return (
    <div className="img-cont">
      <GalleryImage className="img" src="https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg" />
      <GalleryImage className="img" src="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg" />
    </div>
  )
}

export default IndexPage