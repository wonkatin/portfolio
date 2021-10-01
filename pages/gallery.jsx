import Navbar from '../components/Navbar'
import Flyers from '../components/Flyers'



export default function Gallery() {

    return (
        <div className="main-gallery">
            <Navbar />
            <div className="gallery">
                <Flyers />
                <Flyers />
            </div>
        </div>
    )
}